import React from "react";
import "../styles/GamePopup.css";

export default function GamePopup({ title, description, image, onClose }) {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <img src={image} alt={title} className="popup-image" />
        <h2 className="popup-title">{title}</h2>
        <p className="popup-description">{description}</p>
        <button className="popup-close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
