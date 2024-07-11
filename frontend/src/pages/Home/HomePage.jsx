import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Banner from "../../components/Banner/Banner";
import styleHP from "./HomePage.module.css";
import styleS from "../../components/Slider/Slider.module.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [depPusatInfoList, setDepPusatInfoList] = useState([]);
  const [kabInfoList, setKabInfoList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDepPusatInfoList = async () => {
      try {
        const response = await axios.get("http://localhost:5000/deppinfos");
        setDepPusatInfoList(response.data);
      } catch (error) {
        console.error("Error fetching DepPusatInfos list:", error);
      }
    };
    fetchDepPusatInfoList();
  }, []);

  useEffect(() => {
    const fetchKabInfoList = async () => {
      try {
        const response = await axios.get("http://localhost:5000/kabinfos");
        setKabInfoList(response.data);
      } catch (error) {
        console.error("Error fetching KabInfos list:", error);
      }
    };
    fetchKabInfoList();
  }, []);

  const depPusatRef = useRef(null);
  const kabInfoRef = useRef(null);

  const scrollToDepPusat = () => {
    depPusatRef.current.scrollIntoView({ behavior: "smooth" });
    // setTimeout(() => {
    //   navigate("/list", { state: { items: depPusatInfoList } });
    // }, 500);
  };

  const scrollToKabInfo = () => {
    kabInfoRef.current.scrollIntoView({ behavior: "smooth" });
    // setTimeout(() => {
    //   navigate("/list", { state: { items: kabInfoList } });
    // }, 500);
  };

  return (
    <div>
      <div ref={depPusatRef}>
        <Banner banners={depPusatInfoList} />
      </div>
      <div ref={kabInfoRef}>
        <Banner banners={kabInfoList} />
      </div>
      <div className={styleHP.blur}></div>
      <div className={styleS.navigasi2}>
        <button onClick={scrollToDepPusat}>Dep Pusat Banner</button>
        <button onClick={scrollToKabInfo}>Kabinet Info Banner</button>
      </div>
    </div>
  );
};

export default HomePage;
