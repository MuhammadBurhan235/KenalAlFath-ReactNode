import React, { useState } from "react";
import style from "./Slider.module.css";
import { useNavigate } from "react-router-dom";
import images from "../../images";
import Modal from "../Modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faList } from "@fortawesome/free-solid-svg-icons";

const Slider = ({ sliders }) => {
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const toggleAnimation = () => {
    setIsPaused(!isPaused);
  };

  const goToListItemPage = () => {
    navigate("/list", { state: { items: sliders } });
  };

  const handleItemClick = (data) => {
    setSelectedItem(data);
    setSelectedCard(null); // Ensure only one type of content is selected
    setShowModal(true);
  };

  const handleCardClick = (data) => {
    setSelectedCard(data);
    setSelectedItem(null); // Ensure only one type of content is selected
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div
        className={style.slider}
        style={{
          "--quantity": sliders.length,
          animationPlayState: isPaused ? "paused" : "running",
        }}
        data-quantity={sliders.length}
      >
        {sliders.map((slider, index) => (
          <div
            key={index}
            className={style.item}
            style={{ "--position": index + 1 }}
            data-position={index + 1}
          >
            <img
              className={style.img}
              src={images[slider.nama]}
              onClick={() => handleItemClick(images[slider.nama])}
            />
            <div className={style.card} onClick={() => handleCardClick(slider)}>
              <div className={style.cardTitle}>{slider.nama}</div>
              <div className={style.cardBody}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                suscipit fuga perferendis dolor cumque tempora doloremque, odit
                sit asperiores nisi excepturi molestias! Blanditiis dicta sequi
                omnis unde voluptatum porro similique.
              </div>
              <div className={style.cardFooter}></div>
            </div>
          </div>
        ))}
      </div>
      <Modal show={showModal} onClose={handleCloseModal}>
        {selectedItem ? (
          <img className={style.modalImage} src={selectedItem} alt="" />
        ) : selectedCard ? (
          <>
            <h2 className={style.modalTitle}>{selectedCard.nama}</h2>
            <p className={style.modalBody}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor,
              qui. Aliquid sit optio, officia dolores ipsa deserunt, iusto
              minima ratione, quam doloremque sapiente numquam ut nisi ab quos
              deleniti accusamus.
            </p>
          </>
        ) : null}
      </Modal>
      <div className={style.navigasi1}>
        <button onClick={toggleAnimation}>
          <FontAwesomeIcon icon={isPaused ? faPlay : faPause} />
        </button>
        <button onClick={goToListItemPage}>
          <FontAwesomeIcon icon={faList} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
