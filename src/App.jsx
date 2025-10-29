import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Flowers from "./pages/Flowers";
import Ornaments from "./pages/Ornaments";
import About from "./pages/About";
import Login from "./pages/Login";
import Loading from "./pages/Loading";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true); // 🌸 for showing loading animation

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);

    // simulate loading delay
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // 🌸 Show loading screen first
  if (loading) {
    return <Loading />;
  }

  // 🌸 Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  return (
    <Router>
      {isLoggedIn && <Navbar onLogout={handleLogout} />}

      <Routes>
        {!isLoggedIn ? (
          <Route path="*" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/flowers" element={<Flowers />} />
            <Route path="/ornaments" element={<Ornaments />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
