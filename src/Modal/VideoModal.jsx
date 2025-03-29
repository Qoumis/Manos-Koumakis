import React from "react";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";
import { X, Pause } from "lucide-react";
import styles from "./ModalStyles.module.css";

function VideoModal({ url, onClose }) {
  const [playing, setPlaying] = useState(true);

  // Close modal when pressing Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "Spacebar" || e.key === " ") {
        handleClick(); // Toggle play/pause on spacebar press
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close modal when clicking outside modal content
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains(styles.modalOverlay)) {
      onClose(); // Call the onClose function passed from parent
      setPlaying(true); // Reset playing state when closing the modal
    }
  };

  const handleClick = () => {
    setPlaying((prevPlaying) => !prevPlaying); // Toggle play/pause
  };

  return (
    <div>
      <div className={styles.modalOverlay} onClick={handleOverlayClick}>
        <div className={styles.modalContent}>
          <span // Close button
            className={styles.close}
            onClick={() => {
              onClose();
              setPlaying(true);
            }}
          >
            <X size={30} />
          </span>
          <div
            onContextMenu={(e) => e.preventDefault()} // Prevents right-click
          >
            <ReactPlayer
              url={url}
              controls={false}
              playing={playing}
              loop={true}
              width="100%"
              height="100%"
              onClick={handleClick}
              volume={0.5}
            />
            {!playing && <Pause color="#404040" className={styles.pause} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoModal;
