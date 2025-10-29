import React, { useState } from "react";
import "./About.css";

export default function About() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

   try {
  const response = await fetch("https://nikkis-bouquet.onrender.com/api/send-message", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });


      if (response.ok) {
        setIsSent(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Oops! Something went wrong 💔");
      }
    } catch (error) {
      console.error("Backend error:", error);
      alert("Server not reachable. Check your backend connection ⚙️");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="about-page" style={{ backgroundImage: `url('/background.jpg')` }}>
      <h2 className="page-title">Meet the Heart Behind the Crafts 💖</h2>

      <div className="about-profile">
        <img src="/nikki.png" alt="Nikki" className="about-img" />

        <div className="about-content">
          <p>
            Hey there! I’m <b>Nikki</b> — a flower lover and craft enthusiast who believes
            that even the smallest creations can spark the biggest smiles 🌸.
            Every piece I make — from paper blooms to custom ornaments — carries a
            little story, a little heart, and a whole lot of love.
          </p>

          <p>
            What began as a weekend hobby turned into my cozy little shop — a space
            where creativity blooms and every order feels like gifting joy 🌷.
            Each bouquet and ornament is handmade, perfectly imperfect, and crafted
            with love just for you 💕.
          </p>

          <p className="about-quote">
            “Every flower tells a story — yours deserves to bloom beautifully.”
          </p>
        </div>
      </div>

      <div className="soft-connect">
        <h3 className="section-heading">Let’s Connect and Create Together 🌸</h3>
        <div className="floral-divider">🌷🌸🌷</div>

        <p>
          Have a custom idea, a kind word, or just want to chat about crafts?  
          Drop me a message — I’d love to hear from you 💌
        </p>

        <div className="petal-links">
          <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer">
            🌸 Instagram
          </a>
          <a href="mailto:nikki.crafts@example.com">💌 Email</a>
          <a href="https://wa.me/yourwhatsapplink" target="_blank" rel="noopener noreferrer">
            🌷 WhatsApp
          </a>
        </div>

        <form className="query-box" onSubmit={handleSubmit}>
          <h4 className="form-heading">Drop a Message — From One Bloom to Another 💌</h4>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message..."
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send 🌸"}
          </button>

          {isSent && (
            <p className="thank-you">
              Thank you! Nikki will read your note soon 💖
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
