import React, { useState } from 'react';
import round from '../assets/elon.png'
import './Overlay.css';


export default function Overlay({ playAudio }) {
  const [isOpen, setIsOpen] = useState(true);

  function toggle() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
    playAudio();
  }

  return (
    <>
      <div
        style={{
          opacity: isOpen ? 1 : 0,
          maxHeight: isOpen ? '1000px' : '0',
          overflow: 'hidden',
          transition: 'opacity 1s ease, max-height 1s ease',
        }}
        className="overlay"
      >
        <div className="overlay-inside">
          <div className="imagesOverlay">
                <div className="spinBlock">
                    <img className="spinImg" alt="girl" src={round} />
                </div>
          </div>
          <div className="buttonBlock">
              <button onClick={toggle}className="button">BUY $HOPIN</button>
            </div>
        </div>
      </div>
    </>
  );
}
