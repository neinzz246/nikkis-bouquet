import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // ✅ Add this
import "./Login.css";

export default function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // ✅ initialize navigate

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://nikkis-bouquet.onrender.com/api/auth/login", {
      username,
    password,
    });


      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        setIsLoggedIn(true);
        setMessage("✅ Login successful!");
        setTimeout(() => navigate("/"), 800); // ✅ smooth redirect after short delay
      } else {
        setMessage("❌ Invalid credentials!");
      }
    } catch (err) {
      setMessage("⚠️ Login failed. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtext">to Nikki’s Bouquet 💐</p>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-button">Login</button>
        </form>

        {message && <p className="login-message">{message}</p>}
      </div>
    </div>
  );
}
