import { NextResponse } from "next/server";
import messages from "@/messages/en.json";
import { storeLead } from "@/lib/leads";
import { sendMail } from "@/lib/mail";
import { quoteSchema } from "@/lib/validation";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const parsed = quoteSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "validation_error" }, { status: 400 });
  }

  const data = parsed.data;
  const serviceLabel = messages.Services.items[data.service].title;

  await storeLead("quote", data);

  try {
    await sendMail({
      subject: `Quote request: ${data.company}`,
      replyTo: data.email,
      text: [
        `Company: ${data.company}`,
        `Contact: ${data.name}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone}`,
        `Service: ${serviceLabel}`,
        `Pickup: ${data.pickup}`,
        `Delivery: ${data.delivery}`,
        `Cargo: ${data.cargo || "-"}`,
        `Weight: ${data.weight || "-"}`,
        `Preferred date: ${data.date || "-"}`,
        "",
        data.message || "(no message)",
      ].join("\n"),
    });
  } catch (error) {
    console.error("[quote] send failed", error);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
