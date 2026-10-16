import { Resend } from "resend";

export type MailMessage = {
  subject: string;
  text: string;
  replyTo?: string;
};

/**
 * Sends a plain-text notification email.
 *
 * Delivery is best-effort: when no provider is configured the message is only
 * logged, so development environments never fail on missing credentials.
 */
export async function sendMail(message: MailMessage): Promise<void> {
  const to = process.env.MAIL_TO;
  const from = process.env.MAIL_FROM;

  if (!to || !from) {
    console.info("[mail] skipped (MAIL_TO/MAIL_FROM not configured)");
    return;
  }

  if (process.env.RESEND_API_KEY) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from,
      to,
      subject: message.subject,
      text: message.text,
      replyTo: message.replyTo,
    });
    return;
  }

  if (process.env.SMTP_HOST) {
    const nodemailer = await import("nodemailer");
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: process.env.SMTP_USER
        ? {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD,
          }
        : undefined,
    });

    await transporter.sendMail({
      from,
      to,
      subject: message.subject,
      text: message.text,
      replyTo: message.replyTo,
    });
    return;
  }

  console.info("[mail] skipped (no provider configured)", message.subject);
}
