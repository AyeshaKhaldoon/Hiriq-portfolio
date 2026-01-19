import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, company, subject, message } = await req.json();

    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json({ error: 'Please fill in all required fields.' }, { status: 400 });
    }

    const fullName = `${firstName} ${lastName}`;

    // Internal email to support
    const internalMsg = {
      to: process.env.SUPPORT_EMAIL!,
      from: process.env.SENDGRID_FROM_EMAIL!,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br />${message}</p>
      `,
    };

    // Auto-reply to user
    // Auto-reply to user (modern, nicer design)
const autoReply = {
  to: email,
  from: process.env.SENDGRID_FROM_EMAIL!,
  subject: `We received your message!`,
  html: `
    <div style="
      font-family: 'Helvetica Neue', Arial, sans-serif;
      background-color: #f9fafb;
      padding: 40px;
      color: #1f2937;
    ">
      <div style="
        max-width: 600px;
        margin: auto;
        background-color: #ffffff;
        border-radius: 12px;
        padding: 40px;
        box-shadow: 0 4px 16px rgba(0,0,0,0.08);
      ">
        <h1 style="color: #4f46e5; font-size: 28px; margin-bottom: 20px;">
          Hi ${firstName},
        </h1>
        <p style="font-size: 16px; line-height: 1.6;">
          Thanks for reaching out to us! We have received your message regarding 
          "<strong>${subject}</strong>".
        </p>
        <p style="font-size: 16px; line-height: 1.6;">
          Our team will review it and get back to you within <strong>24 hours</strong>.
        </p>
        <div style="margin-top: 30px;">
          <p style="font-size: 16px; line-height: 1.6;">Cheers,<br /><strong>The Hiriq Team</strong></p>
        </div>
        <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;" />
        <p style="font-size: 12px; color: #6b7280; text-align: center;">
          You received this email because you contacted Hiriq. 
          If you did not submit a request, please ignore this email.
        </p>
      </div>
    </div>
  `,
};

    await Promise.all([sgMail.send(internalMsg), sgMail.send(autoReply)]);

    return NextResponse.json({ success: true, message: 'Your message has been sent! Check your inbox for confirmation.' });
  } catch (err: any) {
    console.error('Contact form error:', err);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
