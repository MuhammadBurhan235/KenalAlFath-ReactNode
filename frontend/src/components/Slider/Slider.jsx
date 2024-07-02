import React from "react";
import "./Slider.css";
import masul from "../../images/mas_ul.png";
import sekjen from "../../images/sekjen.png";
import mo from "../../images/mo.png";
import korwat from "../../images/korwat.png";
import psdm from "../../images/psdm.png";
import kdrp from "../../images/kdrp.png";
import sekre from "../../images/sekre.png";
import medkominfo from "../../images/medkominfo.png";
import syiar from "../../images/syiar.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Slider = () => {
  return (
    <div className="slider" style={{ "--quantity": 10 }}>
      <div className="item" style={{ "--position": 1 }}>
        <a href="masul">
          <img src={masul} alt="" />
        </a>
        <div className="card blink"></div>
      </div>
      <div className="item" style={{ "--position": 2 }}>
        <a href="sekjen">
          <img src={sekjen} alt="" />
        </a>
        <div className="card"></div>
      </div>
      <div className="item" style={{ "--position": 3 }}>
        <a href="mo">
          <img src={mo} alt="" />
        </a>
        <div className="card"></div>
      </div>
      <div className="item" style={{ "--position": 4 }}>
        <a href="korwat">
          <img src={korwat} alt="" />
        </a>
        <div className="card"></div>
      </div>
      <div className="item" style={{ "--position": 5 }}>
        <a href="psdm">
          <img src={psdm} alt="" />
        </a>
        <div className="card"></div>
      </div>
      <div className="item" style={{ "--position": 6 }}>
        <a href="kdrp">
          <img src={kdrp} alt="" />
        </a>
        <div className="card"></div>
      </div>
      <div className="item" style={{ "--position": 7 }}>
        <a href="sekre">
          <img src={sekre} alt="" />
        </a>
        <div className="card"></div>
      </div>
      <div className="item" style={{ "--position": 8 }}>
        <a href="medkominfo">
          <img src={medkominfo} alt="" />
        </a>
        <div className="card"></div>
      </div>
      <div className="item" style={{ "--position": 9 }}>
        <a href="syiar">
          <img src={syiar} alt="" />
        </a>
        <div className="card"></div>
      </div>
      <div className="item" style={{ "--position": 10 }}>
        {/* <i class="fa-solid fa-plus"></i> */}
      </div>
    </div>
  );
};

export default Slider;
