import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import authRoutes from "./authRoutes.js";

const app = express();

// ✅ Proper CORS setup (important!)
app.use(cors({
  origin: [
    "http://localhost:5173",             // for local dev
    "https://nikkis-bouquet.vercel.app"  // for deployed frontend
  ],
  methods: ["GET", "POST"],
  credentials: true,
}));

app.use(express.json());

// ✅ Authentication routes
app.use("/api/auth", authRoutes);

// ✅ Set up email transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "nayanasurendranvb@gmail.com", // your Gmail
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

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
