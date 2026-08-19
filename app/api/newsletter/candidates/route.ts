import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { email, utm } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    const msg = {
      to: email,
      from: process.env.SENDGRID_EMAIL!,
      subject: '🎉 Welcome to Hiriq Candidates Waitlist!',
      html: `
        <div style="font-family: 'Arial', sans-serif; line-height: 1.6; color: #1f2937; max-width: 600px; margin: auto; padding: 20px; background-color: #f9f9fb; border-radius: 12px; border: 1px solid #e5e7eb;">
          <div style="text-align: center; margin-bottom: 20px;">
            <h1 style="color: #4f46e5; font-size: 28px; margin-bottom: 10px;">Welcome to Hiriq!</h1>
            <p style="color: #6b7280; font-size: 16px;">You’re officially on the waitlist for our AI-powered interview practice platform 🎯</p>
          </div>

          <div style="background-color: #ffffff; padding: 20px; border-radius: 10px; border: 1px solid #e5e7eb;">
            <p>Hi there,</p>
            <p>Thanks for signing up! You’ll be among the first to get:</p>
            <ul style="padding-left: 20px; color: #374151;">
              <li>⚡ Early access to AI-powered interview practice</li>
              <li>📈 Tips to ace technical and behavioral interviews</li>
              <li>🎁 Exclusive free trial interviews when we launch</li>
            </ul>
            <p>We’re excited to help you prepare smarter, not harder, and make your next interview a success!</p>
          </div>

      

          <hr style="margin: 30px 0; border-color: #e5e7eb;" />

          <p style="font-size: 12px; color: #9ca3af; text-align: center;">
            You received this email because you signed up for the Hiriq Candidates Waitlist. If this wasn’t you, you can safely ignore this email.
          </p>
        </div>
      `,
    };

    await sgMail.send(msg);

    console.log('[Candidates] Waitlist signup:', { email, utm });

    return NextResponse.json({ message: 'Subscription successful!' });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
