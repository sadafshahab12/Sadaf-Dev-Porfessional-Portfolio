import { NextResponse } from "next/server";
import { sanityClient } from "@/app/lib/sanityClient";
import nodemailer from "nodemailer";
import { SubscriberData } from "@/app/types/subscriber";

export async function POST(req: Request) {
  try {
    const body: SubscriberData = await req.json();
    const { email, subscriptionType } = body;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Duplicate check
    const query = `*[_type == "subscriber" && email == $email][0]`;
    const existing = await sanityClient.fetch(query, {
      email: email.toLowerCase(),
    });

    if (existing) {
      return NextResponse.json(
        { error: "You are already subscribed!" },
        { status: 400 },
      );
    }

    // Save to Sanity
    await sanityClient.create({
      _type: "subscriber",
      email: email.toLowerCase(),
      subscriptionType: subscriptionType || "general",
      subscribedAt: new Date().toISOString(),
    });

    // Email notification to you
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `🔔 New Subscriber: ${subscriptionType || "General"}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #4f46e5; border-radius: 10px;">
          <h2 style="color: #4f46e5;">New Signup!</h2>
          <p><strong>Email:</strong> ${email.toLowerCase()}</p>
          <p><strong>List:</strong> ${subscriptionType}</p>
        </div>
      `,
    });

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
