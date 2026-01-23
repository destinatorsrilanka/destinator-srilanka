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
      subject: `🚀 New Inquiry from ${data.name}`,
      html: `<p>Name: ${data.name}</p><p>Email: ${data.email}</p><p>Location: ${data.location}</p>`,
    };

    const customerMailOptions = {
      from: process.env.EMAIL_USER,
      to: data.email,
      subject: "Thank You - Destinator Lanka",
      html: `<p>Hi ${data.name}, We received your inquiry for ${data.location}.</p>`,
    };

    // ඊමේල් යැවීම තහවුරු කරගන්න
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(customerMailOptions);

    // --- මෙන්න මේ කොටස ඉතා වැදගත් ---
    // සාර්ථක බව UI එකට දැන්වීමට මෙම response එකම භාවිතා කරන්න
    return new Response(
      JSON.stringify({
        success: true,
        message: "Inquiry sent successfully!",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  } catch (error: any) {
    console.error("Mail Error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: error.message || "Server Error",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
