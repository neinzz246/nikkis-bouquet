import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import authRoutes from "./authRoutes.js";

const app = express(); // ✅ must come first

app.use(cors());
app.use(express.json());

// ✅ Route for authentication
app.use("/api/auth", authRoutes);

// ✅ Set up your transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "nayanasurendranvb@gmail.com", // replace with your Gmail
    pass: "rtsrahhnhvqcthlc", // your App Password (keep safe!)
  },
});

// ✅ Handle POST request from frontend
app.post("/api/send-message", async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: "yourgmail@gmail.com", // replace with your actual receiving email
    subject: `New message from ${name}`,
    text: `
You have a new message from your website:

Name: ${name}
Email: ${email}
Message:
${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("✅ Message sent successfully!");
    res.json({ success: true, msg: "Email sent successfully!" });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    res.status(500).json({ success: false, msg: "Failed to send email." });
  }
});

app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));
