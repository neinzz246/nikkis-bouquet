import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ onLogout }) {
  return (
    <header className="navbar">
      <div className="navbar-content">
        <h1 className="logo">
          Nikki’s Bouquet <span className="heart">❤</span>
        </h1>
        <p className="tagline">crafted with love</p>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/flowers">Flowers</Link>
          <Link to="/ornaments">Ornaments</Link>
          <Link to="/about">About Me</Link>
          <button className="logout-btn" onClick={onLogout}>
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
}
