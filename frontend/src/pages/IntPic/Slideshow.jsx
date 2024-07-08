import React, { useState } from "react";

const Slideshow = ({ images }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const showSlides = (n) => {
    let newIndex = slideIndex + n;
    if (newIndex >= images.length) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = images.length - 1;
    }
    setSlideIndex(newIndex);
  };

  return (
    <div>
      <a className="prev" onClick={() => showSlides(-1)} style={{ left: 0 }}>
        &#10094;
      </a>
      <div className="slideshow-container">
        {images.map((image, index) => (
          <div
            className="slides"
            style={{ display: index === slideIndex ? "block" : "none" }}
            key={index}
          >
            <img
              src={image}
              style={{ width: "100%" }}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <a className="next" onClick={() => showSlides(1)} style={{ right: 0 }}>
        &#10095;
      </a>
    </div>
  );
};

export default Slideshow;
