import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      arrivalDate,
      departureDate,
      guests,
      kids,
      country,
      location,
      transport,
      interest_plant,
      interest_invest,
      interest_media, // නව අගය ලබා ගැනීම
    } = body;

    // 1. Transporter එක සැකසීම
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 2. ඔබට ලැබෙන Email එක (Admin Notification)
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Inquiry from ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #064e3b;">New Journey Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Country:</strong> ${country}</p>
          <hr />
          <p><strong>Arrival:</strong> ${arrivalDate} | <strong>Departure:</strong> ${departureDate}</p>
          <p><strong>Guests:</strong> ${guests} | <strong>Kids:</strong> ${kids || 0}</p>
          <p><strong>Transport:</strong> ${transport || "Not specified"}</p>
          <p><strong>Locations:</strong> ${location}</p>
          <hr />
          <p style="color: ${interest_plant === "Yes" ? "#16a34a" : "#666"};">
            <strong>Planting Interest:</strong> ${interest_plant}
          </p>
          <p style="color: ${interest_invest === "Yes" ? "#ca8a04" : "#666"};">
            <strong>Investment Interest:</strong> ${interest_invest}
          </p>
          <p style="color: ${interest_media === "Yes" ? "#2563eb" : "#666"};">
            <strong>Media Coverage Interest:</strong> ${interest_media}
          </p>
        </div>
      `,
    };

    // 3. පාරිභෝගිකයාට යන Email එක (Auto-Confirmation)
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Inquiry Received - Destinator",
      html: `
        <div style="font-family: sans-serif; padding: 20px; text-align: center;">
          <h1 style="color: #064e3b;">Ayubowan ${name}!</h1>
          <p>Thank you for reaching out to Destinator.lk.</p>
          <p>We have received your inquiry about your journey on <strong>${arrivalDate}</strong>.</p>
          <p>Our team will review your details and get back to you within 24 hours.</p>
          <br />
          <div style="background: #f0fdf4; padding: 15px; border-radius: 10px; display: inline-block;">
            <p style="margin: 0; font-size: 14px; font-weight: bold;">Selected Interests:</p>
            <p style="margin: 5px 0 0 0; font-size: 13px;">
              ${interest_plant === "Yes" ? "🌳 Planting " : ""} 
              ${interest_invest === "Yes" ? "🤝 Investment " : ""}
              ${interest_media === "Yes" ? "📸 Media Coverage" : ""}
            </p>
          </div>
          <p style="margin-top: 20px; font-size: 12px; color: #666;">This is an automated response, please do not reply to this email.</p>
        </div>
      `,
    };

    // Email දෙකම යැවීම
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json(
      { message: "Emails sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Email Error:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 },
    );
  }
}
