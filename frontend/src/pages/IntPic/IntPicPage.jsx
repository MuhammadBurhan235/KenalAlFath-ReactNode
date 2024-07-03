import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import orion from "../../images/orion.png";
import rinai from "../../images/rinai.png";
import Modal from "../../components/Modal/Modal";

const images = {
  "Orion Amerta": orion,
  "Rinai Hamaika": rinai,
};

const IntPicPage = () => {
  const [kabinetInfoList, setKabinetInfoList] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchKabinetInfoList = async () => {
      try {
        const response = await axios.get("http://localhost:5000/kabinfos");
        setKabinetInfoList(response.data);
      } catch (error) {
        console.error("Error fetching KabInfo list:", error);
      }
    };
    fetchKabinetInfoList();
  }, []);

  const handlePhotoClick = (data) => {
    setSelectedPhoto(data);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const styles = [
    { border: "2px solid red", borderRadius: "10px" },
    { border: "2px solid blue", borderRadius: "20px" },
    { border: "2px solid green", borderRadius: "30px" },
  ];

  return (
    <div>
      <div className="image-gallery">
        {kabinetInfoList.map((kab, index) => (
          <img
            key={index}
            src={images[kab.nama]}
            alt={kab.nama}
            onClick={() => handlePhotoClick(kab)}
            style={styles[index % styles.length]}
            className="thumbnail"
          />
        ))}
      </div>
      <Modal show={showModal} onClose={handleCloseModal}>
        {selectedPhoto && (
          <>
            <h2>{selectedPhoto.nama}</h2>
            <p>{selectedPhoto.deskripsi}</p>
          </>
        )}
      </Modal>
    </div>
  );
};

export default IntPicPage;
