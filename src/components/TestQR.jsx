import React from "react";
import QRCode from "qrcode.react";

export default function TestQR() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>QR Test</h2>
      <QRCode value="https://example.com" size={180} />
    </div>
  );
}
