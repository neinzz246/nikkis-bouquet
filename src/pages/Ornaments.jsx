import React from "react";
import ProductCard from "../components/ProductCard";
import necklace from "../assets/necklace.png";
import earrings from "../assets/earrings.png";
import bracelet from "../assets/bracelet.png";

export default function Ornaments() {
  const ornaments = [
    { image: necklace, name: "Beaded Necklace", price: 250, qrLink: "https://your-qr-link.com" },
    { image: earrings, name: "Clay Earrings", price: 180, qrLink: "https://your-qr-link.com" },
    { image: bracelet, name: "Thread Bracelet", price: 120, qrLink: "https://your-qr-link.com" },
  ];

  return (
    <div
      className="ornaments-page"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 245, 250, 0.8), rgba(255, 245, 250, 0.8)), url("/background.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        padding: "60px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h2
        className="page-title"
        style={{
          fontFamily: '"Great Vibes", cursive',
          fontSize: "2.2rem",
          color: "#a84d63",
          marginBottom: "40px",
          letterSpacing: "1px",
          textShadow: "1px 1px 2px rgba(255, 255, 255, 0.6)",
        }}
      >
        Handmade Ornaments
      </h2>

      <div
        className="products"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
          width: "100%",
          maxWidth: "1100px",
        }}
      >
        {ornaments.map((o, i) => (
          <ProductCard key={i} {...o} />
        ))}
      </div>
    </div>
  );
}
