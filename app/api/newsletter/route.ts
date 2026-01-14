import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    const msg = {
      to: email,
      from: process.env.SENDGRID_FROM_EMAIL!,
      subject: '🎉 Welcome to Hiriq – Your Weekly Recruitment Insights!',
      html: `
        <div style="font-family: Arial, sans-serif; color: #1f2937; line-height: 1.6;">
          <h1 style="color: #4f46e5;">Welcome to Hiriq!</h1>
          <p>Hi there,</p>
          <p>Thank you for subscribing to the Hiriq Newsletter. You’re now part of a community of forward-thinking recruiters and hiring professionals.</p>
          <p>Every week, we’ll share:</p>
          <ul>
            <li>Insights on AI-powered recruitment and hiring trends</li>
            <li>Best practices to reduce time-to-hire and improve candidate quality</li>
            <li>Exclusive tips from industry experts</li>
          </ul>
          <p>We’re excited to help you stay ahead in modern recruitment!</p>
          <p style="margin-top: 20px;">Cheers,<br /><strong>The Hiriq Team</strong></p>
          <hr style="margin-top: 20px; border-color: #e5e7eb;" />
          <p style="font-size: 12px; color: #6b7280;">
            You received this email because you subscribed to the Hiriq Newsletter. If this wasn’t you, you can safely ignore this email.
          </p>
        </div>
      `,
    };

    await sgMail.send(msg);

    return NextResponse.json({ message: 'Subscription successful!' });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
