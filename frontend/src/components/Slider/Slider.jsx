import React, { useState } from "react";
import style from "./Slider.module.css";
import images from "../../images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons"; // import faPlay icon as well

const Slider = ({ sliders }) => {
  const [isPaused, setIsPaused] = useState(false);

  const toggleAnimation = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div>
      <div
        className={style.slider}
        style={{
          "--quantity": sliders.length,
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {sliders.map((slider, index) => (
          <div
            key={index}
            className={style.item}
            style={{ "--position": index + 1 }}
          >
            <a href="aaa">
              <img className={style.img} src={images[slider.nama]} alt="" />
            </a>
            <div className={style.card}></div>
          </div>
        ))}
      </div>
      <div className={style.pause}>
        <button onClick={toggleAnimation}>
          <FontAwesomeIcon icon={isPaused ? faPlay : faPause} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
