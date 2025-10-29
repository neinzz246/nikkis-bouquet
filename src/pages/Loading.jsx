import React from "react";
import "./Loading.css";

export default function Loading() {
  return (
    <div className="loading-container">
      <div className="flower-ring"></div>
      <p className="loading-text">Gathering petals…</p>
    </div>
  );
}
