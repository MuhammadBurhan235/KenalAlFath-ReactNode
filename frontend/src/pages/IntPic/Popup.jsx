import React from "react";

const Popup = ({ id, onClose, children, backgroundColor }) => {
  return (
    <div className="popup" id={id} style={{ display: "flex" }}>
      <div className="popup-content" style={{ backgroundColor }}>
        {children}
        <span
          className="popup-close"
          onClick={onClose}
          style={{ cursor: "pointer" }}
        >
          Close
        </span>
      </div>
    </div>
  );
};

export default Popup;
