import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Handle POST requests to the /api/contact route
export async function POST(request: Request) {
  try {
    // Parse the JSON data from the request body
    const { name, email, subject, message, priceRequest } = await request.json();

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Construct the email body
    const emailBody = `
      <h1>New Contact Form Submission</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong> ${message}</p>
      <p><strong>Price Request:</strong> ${priceRequest ? 'Yes' : 'No'}</p>
    `;

    // Send the email
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Sender address
      to: process.env.EMAIL_USER, // Recipient address
      replyTo: email, // Set the reply-to header to the user's email
      subject: `New Request: ${subject}`, // Subject line
      html: emailBody, // HTML body content
    });

    // Return a success response
    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ message: 'Error sending message.' }, { status: 500 });
  }
}
