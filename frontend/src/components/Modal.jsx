import React from "react";
import styles from "./styles/Modal.module.css";

const Modal = ({ imgSrc, cardContent, onClose }) => {
  return (
    <div className={styles.modal} style={{ display: imgSrc ? "flex" : "none" }}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={onClose}>
          &times;
        </span>
        <div className={styles.modalBody}>
          <div className={styles.modalImage}>
            <img src={imgSrc} alt="" />
          </div>
          <div className={styles.modalCard}>{cardContent}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
