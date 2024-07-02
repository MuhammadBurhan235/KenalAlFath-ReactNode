import React from "react";
import "./Navigation.css"; // Pastikan ini sesuai dengan nama file CSS Anda

const Navigation = ({ scrollToBanner }) => {
  // Menggunakan destrukturisasi untuk props
  return (
    <div className="navigation">
      <button onClick={() => scrollToBanner("banner1")}>
        Departemen Pusat
      </button>
      <button onClick={() => scrollToBanner("banner2")}>Kader Award</button>
      <button onClick={() => scrollToBanner("banner3")}>
        Days to Big Event
      </button>
    </div>
  );
};

export default Navigation;
