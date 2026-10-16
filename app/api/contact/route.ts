import { NextResponse } from "next/server";
import { storeLead } from "@/lib/leads";
import { sendMail } from "@/lib/mail";
import { contactSchema } from "@/lib/validation";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "validation_error" }, { status: 400 });
  }

  const data = parsed.data;
  await storeLead("contact", data);

  try {
    await sendMail({
      subject: `Contact form: ${data.name}`,
      replyTo: data.email,
      text: [
        `Name:    ${data.name}`,
        `Company: ${data.company || "-"}`,
        `Email:   ${data.email}`,
        `Phone:   ${data.phone || "-"}`,
        "",
        data.message,
      ].join("\n"),
    });
  } catch (error) {
    console.error("[contact] could not send notification", error);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
