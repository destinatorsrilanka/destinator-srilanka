import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.INQUIRY_RECEIVER,
      subject: "New Inquiry - Destinator Lanka",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #F58220;">
          <h2 style="color: #F58220;">New Trip Plan Received</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Location:</strong> ${data.location}</p>
        </div>
      `,
    };

    await transporter.sendMail(adminMailOptions);
    return NextResponse.json(
      { message: "Inquiry sent successfully!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Mail Error:", error);
    return NextResponse.json(
      { message: "Error sending email." },
      { status: 500 },
    );
  }
}
