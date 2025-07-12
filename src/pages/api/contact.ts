import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer  from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests allowed" });
  }

  const { firstName, lastName, email, phone, subject, message } = req.body;
  console.log("Received data:", req.body);

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",    
  port: 587,                   
  secure: false,              
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});


  transporter.verify((error, success) => {
    if (error) {
      console.log("Email auth failed:", error);
    } else {
      console.log("Server is ready to send messages");
    }
  });
  

  try {
    await transporter.sendMail({
      from: `${firstName} ${lastName} <${email}>`,
      to: process.env.EMAIL_USERNAME,
      subject: subject || "New Contact Form Submission",
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
}
