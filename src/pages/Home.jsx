import React from "react";
import ProductCard from "../components/ProductCard";
import tulip from "../assets/tulip.png";
import rose from "../assets/rose.png";
import lily from "../assets/lily.png";

export default function Home() {
  const products = [
    { image: tulip, name: "Tulip Flowers", price: 350, qrLink: "https://your-qr-link.com" },
    { image: rose, name: "Rose Bouquet", price: 400, qrLink: "https://your-qr-link.com" },
    { image: lily, name: "Lily Arrangement", price: 300, qrLink: "https://your-qr-link.com" },
  ];

  return (
    <div
      className="home-page"
      style={{
        backgroundImage: `url("/background.jpg")`, // ✅ now fetched from public folder
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        padding: "40px 20px",
      }}
    >
      <div className="products">
        {products.map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </div>
    </div>
  );
}
