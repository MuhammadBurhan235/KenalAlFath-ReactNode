import React, { useEffect, useState } from "react";
import axios from "axios";
import Banner from "../../components/Banner/Banner";
import style from "./HomePage.module.css";

const HomePage = () => {
  const [depPusatInfoList, setDepPusatInfoList] = useState([]);
  const [kabInfoList, setKabInfoList] = useState([]);

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

  return (
    <div>
      <Banner banners={depPusatInfoList} />
      <Banner banners={kabInfoList} />
    </div>
  );
};

export default HomePage;
