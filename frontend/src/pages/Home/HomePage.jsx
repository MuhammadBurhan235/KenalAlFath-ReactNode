import React from "react";
import Banner from "../../components/Banner/Banner";
import Navigation from "../../components/Navigation/Navigation";
import "./style.css";

const HomePage = () => {
  const scrollToBanner = (bannerId) => {
    console.log("Scrolling to:", bannerId);
    const bannerElement = document.getElementById(bannerId);
    if (bannerElement) {
      bannerElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="HomePage">
      <Banner id="banner1" />
      <Banner id="banner2" />
      <Banner id="banner3" />
      <Navigation scrollToBanner={scrollToBanner} />
    </div>
  );
};

export default HomePage;
