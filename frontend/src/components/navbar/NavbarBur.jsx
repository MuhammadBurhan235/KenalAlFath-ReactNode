import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        backgroundColor: "#E784A0",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <nav
        className="navbar"
        role="navigation"
        aria-label="main navigation"
        style={{
          backgroundColor: "#D75774",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          position: "absolute",
          height: 200,
          width: 135,
          marginLeft: 100,
          borderBottomLeftRadius: 100,
          borderBottomRightRadius: 100,
          border: "solid",
        }}
      >
        <div
          className="navbar-menu"
          style={{
            backgroundColor: "#D75774",
            marginLeft: 30,
            width: 900,
            height: 60,
            marginTop: 7,
            border: "solid",
          }}
        >
          <div className="navbar-end" style={{ marginLeft: 100 }}>
            <Link
              to="/"
              className="navbar-item"
              style={{
                fontFamily: "sans-serif",
                color: "#74263F",
                fontWeight: "bold",
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                fontSize: 12,
                margin: 10,
              }}
            >
              About Us
            </Link>
            <Link
              to="/"
              className="navbar-item"
              style={{
                fontFamily: "sans-serif",
                color: "#74263F",
                fontWeight: "bold",
                marginLeft: 30,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                fontSize: 12,
              }}
            >
              Product
            </Link>
            <Link
              to="/"
              className="navbar-item"
              style={{
                fontFamily: "sans-serif",
                color: "#74263F",
                fontWeight: "bold",
                marginLeft: 30,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                fontSize: 12,
              }}
            >
              Management
            </Link>
            <Link
              to="/"
              className="navbar-item"
              style={{
                fontFamily: "sans-serif",
                color: "#74263F",
                fontWeight: "bold",
                marginLeft: 30,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                fontSize: 12,
              }}
            >
              News & Event
            </Link>
            {/* Tambahkan item menu lainnya sesuai kebutuhan */}
          </div>
        </div>

        <div className="navbar-brand">
          <Link to="/mainpage" className="navbar-item">
            <img
              src="/logoCampina.png"
              style={{
                maxWidth: 205,
                maxHeight: 140,
                marginLeft: -979,
                marginTop: 20,
                position: "absolute",
              }}
            />
          </Link>
        </div>
      </nav>
      <div
        className="box"
        style={{
          backgroundColor: "red",
          width: 100,
          height: 60,
          marginTop: 80,
          position: "absolute",
          clipPath: "polygon(0% 0%, 100% 0%, 30% 100%, 0% 100%)",
        }}
      ></div>
    </div>
  );
};

export default Navbar;
