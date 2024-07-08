import React, { useState } from "react";
import "./IntPicPage.module.css";
import Popup from "./Popup";
import Slideshow from "./Slideshow";
import useFullscreen from "../../utils/FullscreenUtils"; // Import the fullscreen module
import toa from "../../assets/images/toa.png";
import restoran from "../../assets/images/restoran.png";
import mobil1 from "../../assets/images/mobil1.png";
import restoran1 from "../../assets/images/restoran1.png";
import woman from "../../assets/images/woman.png";
import man from "../../assets/images/man.png";
import slide1 from "../../assets/images/slide1.png";
import slide2 from "../../assets/images/slide2.webp";
import slide3 from "../../assets/images/slide3.webp";

const HomePage = () => {
  const [popup, setPopup] = useState("");
  const { isFullscreen, toggleFullscreen } = useFullscreen(); // Use the fullscreen hook

  const handleImageClick = (popupId) => {
    setPopup(popupId);
  };

  const handleClosePopup = () => {
    setPopup("");
  };

  return (
    <div className="app">
      <div className={`full-image ${popup ? "blur" : ""}`}></div>
      <div
        className="small-image-container"
        style={{
          bottom: isFullscreen ? "17.5vw" : "13vw",
          left: isFullscreen ? "75.5vw" : "75vw",
        }}
      >
        <img
          src={toa}
          alt="Small Image 1"
          className="small-image"
          data-popup="mobil"
          style={{ width: "6vw", height: "9vw" }}
          onClick={() => handleImageClick("mobil")}
        />
      </div>
      <div
        className="small-image-container"
        style={{ top: "0vw", left: "0vw" }}
      >
        {/* <img
          src={isFullscreen ? restoran1 : restoran}
          alt="Small Image 3"
          className="small-image"
          data-popup="restoran"
          style={{ width: "86vw", height: "auto" }}
          onClick={() => handleImageClick("restoran")}
        /> */}
      </div>
      {/* {popup === "mobil" && (
        <Popup
          id="mobil"
          onClose={handleClosePopup}
          backgroundColor="transparent"
        >
          <div className="card-container">
            {[woman, man, woman, man, woman, man, woman, man, woman].map(
              (image, index) => (
                <div className="card" key={index}>
                  <img
                    src={image}
                    style={{ width: "30%" }}
                    alt={`Image ${index + 1}`}
                  />
                </div>
              )
            )}
          </div>
        </Popup>
      )}
      {popup === "restoran" && (
        <Popup id="restoran" onClose={handleClosePopup}>
          <Slideshow images={[slide1, slide2, slide3]} />
        </Popup>
      )} */}
      <div
        style={{
          background: isFullscreen ? "black" : "white",
          color: isFullscreen ? "white" : "black",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button
          onClick={toggleFullscreen}
          style={{
            width: "8vw",
            height: "3vw",
            position: "absolute",
            top: "1vw",
            right: "1vw",
            padding: "10px 20px",
            cursor: "pointer",
            background: "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "1vw",
          }}
        >
          {isFullscreen ? "Window" : "Fullscreen"}
        </button>
      </div>
    </div>
  );
};

export default HomePage;
