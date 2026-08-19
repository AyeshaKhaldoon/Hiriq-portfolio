import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const SENDGRID_EMAIL = process.env.SENDGRID_EMAIL;
const isSendGridConfigured =
  typeof SENDGRID_API_KEY === 'string' &&
  SENDGRID_API_KEY.startsWith('SG.') &&
  typeof SENDGRID_EMAIL === 'string' &&
  SENDGRID_EMAIL.length > 0;

if (isSendGridConfigured) {
  sgMail.setApiKey(SENDGRID_API_KEY);
}

export async function POST(req: NextRequest) {
  try {
    const { email, utm } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    if (isSendGridConfigured) {
      const msg = {
        to: email,
        from: SENDGRID_EMAIL!,
        subject: "You're subscribed – Hiriq Early Access",
        html: `
        <div style="font-family: 'Arial', sans-serif; line-height: 1.6; color: #1f2937; max-width: 600px; margin: auto; padding: 20px; background-color: #f9f9fb; border-radius: 12px; border: 1px solid #e5e7eb;">
          <div style="text-align: center; margin-bottom: 20px;">
            <h1 style="color: #0f172a; font-size: 28px; margin-bottom: 10px;">You're on the list</h1>
            <p style="color: #6b7280; font-size: 16px;">Thanks for subscribing to early access. We'll notify you when Fully Automated AI Interviews is ready.</p>
          </div>

          <div style="background-color: #ffffff; padding: 20px; border-radius: 10px; border: 1px solid #e5e7eb;">
            <p>Hi there,</p>
            <p>You're officially on the waitlist for Hiriq's Fully Automated AI Interviews. You'll be among the first to get early access when we launch.</p>
            <p>We'll only email you when it's ready — no spam.</p>
          </div>

          <hr style="margin: 30px 0; border-color: #e5e7eb;" />

          <p style="font-size: 12px; color: #9ca3af; text-align: center;">
            You received this because you signed up for Hiriq early access. If this wasn't you, you can safely ignore this email.
          </p>
        </div>
      `,
      };
      await sgMail.send(msg);
    } else {
      // SendGrid not configured: still accept signup so the form doesn't break
      console.log('[Waitlist] Signup (no email sent - set SENDGRID_API_KEY):', { email, utm });
    }

    return NextResponse.json({ message: 'Subscribed successfully!' });
  } catch (err: unknown) {
    console.error('[Waitlist]', err);
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
  }
}
