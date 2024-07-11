import React from "react";
import Slider from "../Slider/Slider";
import style from "./Banner.module.css";

const Banner = ({ banners }) => {
  return (
    <div className={style.banner}>
      <Slider sliders={banners} />
    </div>
  );
};

export default Banner;
