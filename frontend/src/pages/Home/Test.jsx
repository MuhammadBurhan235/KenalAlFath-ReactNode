import React, { useState, useEffect } from "react";
import axios from "axios";

const DepPusatList = () => {
  const [depPusatList, setDepPusatList] = useState([]);

  useEffect(() => {
    const fetchDepPusatList = async () => {
      try {
        const response = await axios.get("http://localhost:5000/deppinfos");
        setDepPusatList(response.data);
      } catch (error) {
        console.error("Error fetching DepPusat list:", error);
      }
    };

    fetchDepPusatList();
  }, []);

  return (
    <div>
      <h2>List DepPusat</h2>
      <ul>
        {depPusatList.map((depp) => (
          <li key={depp.id}>
            <p>ID: {depp.id}</p>
            <p>Nama: {depp.depp_nama}</p>
            {/* Tambahkan informasi lainnya yang ingin ditampilkan */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DepPusatList;
