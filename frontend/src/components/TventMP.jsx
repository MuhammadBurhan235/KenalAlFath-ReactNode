import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

const TventMP = () => {
  return (
    <div>
      <Navbar />
      <div
        className="section"
        style={{
          backgroundColor: "#A2202F",
          height: 645,
        }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>
            <h1
              style={{
                color: "white",
                fontFamily: "Comic Sans MS",
                fontSize: 56,
                fontWeight: 600,
                marginTop: 90,
                marginBottom: 20,
              }}
            >
              Welcome to Tvent
            </h1>
            <p
              style={{
                color: "white",
                fontFamily: "Comic Sans MS",
                margin: 0,
              }}
            >
              Selamat datang di platform unggulan kami, Telkom University
              Kepanitiaan! Kami dengan bangga mempersembahkan kepada Anda
              inovasi terbaru dalam dunia kepanitiaan, sebuah aplikasi
              revolusioner yang akan membantu Anda merencanakan, mengelola, dan
              mempromosikan acara atau kegiatan Anda dengan cara yang belum
              pernah terjadi sebelumnya.
            </p>
            <button
              type="submit"
              className="button"
              style={{
                marginTop: 10,
                fontSize: "15px",
                padding: "24px 40px",
                borderRadius: "50px",
                transition: "0.3s",
                color: "white",
                background: "rgba(255, 255, 255, 0.1)",
                boxShadow: "0 0 15px rgba(0, 0, 0, 0.08)",
                border: "2px solid rgba(255, 255, 255, 0.1)",
                textAlign: "center",
              }}
            >
              SIMPAN
            </button>
          </div>
          <img src="/people.png" alt="" />
        </div>
        <div
          className="section"
          style={{
            position: "absolute",
          }}
        ></div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            className="card"
            style={{
              marginLeft: 200,
              position: "absolute",
              width: 200,
              height: 200,
            }}
          >
            <div className="card-content">
              <img src="/logo192.png" />
            </div>
          </div>
          <div
            className="card"
            style={{
              marginLeft: 500,
              position: "absolute",
              width: 200,
              height: 200,
            }}
          >
            <div className="card-content">
              <img src="/logo192.png" />
            </div>
          </div>
          <div
            className="card"
            style={{
              marginLeft: 800,
              position: "absolute",
              width: 200,
              height: 200,
            }}
          >
            <div className="card-content">
              <img src="/logo192.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="section"></div>
      <Footer />
    </div>
  );
};

export default TventMP;
