import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar"
      role="navigation"
      aria-label="main navigation"
      style={{
        backgroundColor: "#A2202F",
        boxShadow: "0 0 15px rgba(0, 0, 0, 0.5)",
      }}
    >
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          Logo atau Nama Aplikasi
        </Link>
      </div>

      <div className="navbar-menu">
        <div className="navbar-end">
          <Link to="/" className="navbar-item">
            Beranda
          </Link>
          <Link to="/" className="navbar-item">
            Beranda
          </Link>
          <Link to="/" className="navbar-item">
            Beranda
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
