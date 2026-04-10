import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { sanityClient } from "@/app/lib/sanityClient";

// Sanity Client Setup

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, plan, niche, message } = body;

    // 1. Save to Sanity
    const sanityResponse = await sanityClient.create({
      _type: "inquiry",
      name,
      email,
      plan,
      niche,
      message,
    });

    // 2. Email Setup (Nodemailer)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Aapka Gmail
        pass: process.env.EMAIL_PASS, // App Password (Google settings se lein)
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, 
      subject: `New Lead: ${plan} Plan - ${name}`,
      html: `
        <h2>New Pricing Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Plan:</strong> ${plan}</p>
        <p><strong>Niche:</strong> ${niche}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, id: sanityResponse._id });
  } catch (error) {
    console.error("Submission Error:", error);
    return NextResponse.json(
      { success: false, error: "Submission Failed" },
      { status: 500 },
    );
  }
}
