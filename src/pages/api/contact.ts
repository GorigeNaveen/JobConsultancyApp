// import type { NextApiRequest, NextApiResponse } from "next";
// import nodemailer  from "nodemailer";

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ message: "Only POST requests allowed" });
//   }

//   const { firstName, lastName, email, phone, subject, message } = req.body;
//   console.log("Received data:", req.body);

//   const transporter = nodemailer.createTransport({
//     service: "",
//     auth: {
//       user: process.env.EMAIL_USERNAME,
//       pass: process.env.EMAIL_PASSWORD,
//     },
//   });

//   transporter.verify((error, success) => {
//     if (error) {
//       console.log("Email auth failed:", error);
//     } else {
//       console.log("Server is ready to send messages");
//     }
//   });
  

//   try {
//     await transporter.sendMail({
//       from: `${firstName} ${lastName} <${email}>`,
//       to: process.env.EMAIL_USERNAME,
//       subject: subject || "New Contact Form Submission",
//       text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
//     });

//     return res.status(200).json({ success: true });
//   } catch (error) {
//     return res.status(500).json({ success: false, error });
//   }
// }

import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests allowed" });
  }

  const { firstName, lastName, email, phone, subject, message } = req.body;

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ success: false, error: "Missing required fields" });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false, // use TLS
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Verify SMTP connection only in development
  if (process.env.NODE_ENV === "development") {
    transporter.verify((error, success) => {
      if (error) {
        console.error("Email server verification failed:", error);
      } else {
        console.log("SMTP server is ready to send messages");
      }
    });
  }

  try {
    await transporter.sendMail({
      from: `"${firstName} ${lastName}" <${email}>`,
      to: process.env.EMAIL_USERNAME,
      subject: subject || "New Contact Form Submission",
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone || "N/A"}\nMessage: ${message}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Subject:</strong> ${subject || "None"}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error("Error sending email:", error.message || error);
    return res.status(500).json({ success: false, error: "Failed to send email" });
  }
}
