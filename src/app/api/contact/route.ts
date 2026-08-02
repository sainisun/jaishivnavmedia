import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // In a real application, you would integrate Resend, SendGrid, or another mail provider here.
    // E.g., await resend.emails.send({ to: 'your-email@example.com', subject: 'New Lead', ... })
    
    console.log("Form submission received:", data);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
