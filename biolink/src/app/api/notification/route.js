// app/api/notification/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    // Configure email sender (replace with your credentials)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'arhamramay80@gmail.com', // Your sending email
        pass: 'Arham786;' // Gmail app password
      }
    });

    const { labName, updatedName, updatedField } = await request.json();

    // Send notification to arhamramay80@gmail.com
    await transporter.sendMail({
      from: 'your-notification-sender@gmail.com',
      to: 'arhamramay80@gmail.com',
      subject: `Lab Data Updated: ${labName}`,
      html: `
        <h2>Lab Data Update Notification</h2>
        <p><strong>Lab:</strong> ${labName}</p>
        <p><strong>Updated Field:</strong> ${updatedField}</p>
        <p><strong>New Value:</strong> ${updatedName}</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
      `
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Notification failed:', error);
    return NextResponse.json(
      { success: false, error: 'Notification service failed' },
      { status: 500 }
    );
  }
}