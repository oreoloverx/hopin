import React, { useState, useEffect } from "react";
import './Popup.css';

function Popup({ content }) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Show the popup every 10 seconds
    const interval = setInterval(() => {
      setIsVisible(true);

      // Hide the popup after 5 seconds

      setTimeout(() => {
        setIsVisible(false);
      }, 5000);


      setTimeout(() => {
        setIsVisible(false);
      }, 3000);

      // Update the content index
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
      }, 3500); // Adding 1 second delay after fade-out

    }, 6000);

    return () => clearInterval(interval);
  }, [content.length]);

  const { image, name, description } = content[currentIndex];

  return (
    isVisible && (
      <div className={`popup ${isVisible ? "show" : "hide"}`}>
        <div className="popup-pad">
          <p className="popup-description">🔴<strong>NEW</strong> </p>
        </div>
          <img src={image} alt="profile" className="popup-image" />
        <div className="popup-text">
          <h3 className="popup-name">{name}</h3>
          <p className="popup-description">{description}</p>
        </div>
      </div>
    )
  );
}

export default Popup;
