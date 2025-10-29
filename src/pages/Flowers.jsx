import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import { flowersData } from "../data/flowersData";
import "./Flowers.css";

export default function Flowers() {
  const [category, setCategory] = useState("All");

  const categories = ["All", "Bouquets", "Paper Flowers", "Dried Flowers"];

  const filteredFlowers =
    category === "All"
      ? flowersData
      : flowersData.filter((f) => f.category === category);

  return (
    <div
      className="flowers-page"
      style={{
        backgroundImage: `url("/background.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "40px 20px",
      }}
    >
      <h2 className="page-title">Fresh Flower Collection 🌸</h2>

      <div className="category-tabs">
        {categories.map((c) => (
          <button
            key={c}
            className={`tab-btn ${category === c ? "active" : ""}`}
            onClick={() => setCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="products">
        {filteredFlowers.map((f, i) => (
          <ProductCard key={i} {...f} />
        ))}
      </div>
    </div>
  );
}
