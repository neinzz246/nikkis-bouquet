// backend/authRoutes.js
import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const router = express.Router();

const ADMIN_USER = {
 username: "username",
  passwordHash: bcrypt.hashSync("password", 10),
};

// 🪄 LOGIN API
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (username !== ADMIN_USER.username) {
    return res.status(400).json({ msg: "Invalid username" });
  }

  const isMatch = await bcrypt.compare(password, ADMIN_USER.passwordHash);
  if (!isMatch) {
    return res.status(400).json({ msg: "Invalid password" });
  }

  const token = jwt.sign({ username }, "secretkey", { expiresIn: "1h" });
  res.json({ msg: "Login successful", token });
});

export default router;
