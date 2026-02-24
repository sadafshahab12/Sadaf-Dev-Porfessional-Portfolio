import { sanityClient } from "@/app/lib/sanityClient";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const {
      name,
      email,
      message,
      projectType,
      budget,
      timeline,
      socialHandle, 
    } = await req.json();


    await sanityClient.create({
      _type: "contact",
      name,
      email,
      message,
      projectType,
      budget,
      timeline,
      socialHandle: socialHandle || "Not provided", 
      createdAt: new Date().toISOString(),
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });


    const mailOptions = {
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `🚀 Project Inquiry: ${projectType.toUpperCase()} from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
          <div style="background: #4f46e5; padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Project Inquiry</h1>
          </div>
          <div style="padding: 30px; background: #ffffff; color: #1e293b;">
            <p style="font-size: 16px; margin-bottom: 20px;">You have received a new message from your portfolio.</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; font-weight: bold; width: 140px;">Client Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #f1f5f9;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; font-weight: bold;">Client Email:</td>
                <td style="padding: 10px; border-bottom: 1px solid #f1f5f9;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; font-weight: bold;">Social Profile:</td>
                <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; color: #4f46e5;">${socialHandle || "N/A"}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; font-weight: bold;">Service:</td>
                <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; color: #4f46e5; font-weight: 600;">${projectType}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; font-weight: bold;">Budget:</td>
                <td style="padding: 10px; border-bottom: 1px solid #f1f5f9;">${budget}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; font-weight: bold;">Timeline:</td>
                <td style="padding: 10px; border-bottom: 1px solid #f1f5f9;">${timeline}</td>
              </tr>
            </table>

            <div style="margin-top: 20px;">
              <h3 style="color: #4f46e5; margin-bottom: 10px;">Message:</h3>
              <div style="background: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #4f46e5; line-height: 1.6;">
                ${message.replace(/\n/g, "<br>")}
              </div>
            </div>

            <div style="margin-top: 30px; text-align: center;">
              <a href="mailto:${email}" style="background: #4f46e5; color: white; padding: 12px 25px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">
                Reply Directly
              </a>
            </div>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 },
    );
  }
}
