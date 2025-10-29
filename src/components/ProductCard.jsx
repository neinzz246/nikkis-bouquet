import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import "./ProductCard.css";

export default function ProductCard({ image, name, price, qrLink }) {
  const [showQR, setShowQR] = useState(false);

  const handleBuyClick = () => {
    setShowQR(true);
  };

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-img" />

      <div className="product-info">
        <p className="product-name">{name}</p>
        <p className="product-price">₹{price}</p>
      </div>

      <button onClick={handleBuyClick} className="buy-btn">
        Buy Now
      </button>

      {showQR && (
        <div className="qr-popup">
          <div className="qr-content">
            <h4>Scan to Buy 🌸</h4>
            <QRCodeCanvas value={qrLink} size={150} />
            <p className="qr-note">
              Or <a href={qrLink} target="_blank" rel="noopener noreferrer">click here</a> to pay directly 💕
            </p>
            <button className="close-btn" onClick={() => setShowQR(false)}>
              ✨ Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
