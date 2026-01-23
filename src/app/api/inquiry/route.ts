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

    // විස්තරාත්මක ඊමේල් පණිවිඩය
    const emailBody = `
      <h3>🚀 New Trip Inquiry</h3>
      <p><b>Name:</b> ${data.name}</p>
      <p><b>Email:</b> ${data.email}</p>
      <hr>
      <p><b>Arrival Date:</b> ${data.arrivalDate}</p>
      <p><b>Departure Date:</b> ${data.departureDate}</p>
      <p><b>Guests:</b> ${data.guests} | <b>Kids:</b> ${data.kids || 0} (${data.kidsAge || "N/A"})</p>
      <p><b>Country:</b> ${data.country}</p>
      <p><b>Preferred Transport:</b> ${data.transport}</p>
      <p><b>Visiting Location:</b> ${data.location}</p>
    `;

    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.INQUIRY_RECEIVER,
      subject: `🚀 New Inquiry from ${data.name}`,
      html: emailBody,
    };

    const customerMailOptions = {
      from: process.env.EMAIL_USER,
      to: data.email,
      subject: "Thank You - Destinator Lanka",
      html: `<p>Hi ${data.name},</p><p>We received your inquiry for ${data.location}. Our team will contact you shortly.</p>`,
    };

    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(customerMailOptions);

    return NextResponse.json(
      { success: true, message: "Inquiry sent successfully!" },
      { status: 200 },
    );
  } catch (error: any) {
    console.error("Mail Error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Server Error" },
      { status: 500 },
    );
  }
}
