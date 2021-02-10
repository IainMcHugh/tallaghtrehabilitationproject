import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";

import { SMSelector } from ".";

function SocialMedia() {
  const [videoOverlay, setVideoOverlay] = useState(false);

  useEffect(() => {
    videoOverlay
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "initial");
  });

  function handleClick(value) {
    setVideoOverlay(value);
  }

  return (
    <div>
      <Parallax
        bgImage={require("../../../images/kiltalown_old.jpg")}
        strength={700}
      >
        <div style={{ height: 700 }}>
          <SMSelector handleClick={handleClick} />
        </div>
      </Parallax>
      {videoOverlay ? (
        <div class="overlay-video">
          <div class="overlay-video-container">
            <button onClick={() => setVideoOverlay(0)} id="close-overlay">
              <i
                class="material-icons"
                style={{
                  fontSize: "36px",
                  backgroundColor: "transparent",
                  color: "#f4d90c",
                }}
              >
                close
              </i>
            </button>
            <iframe
              src="https://www.youtube.com/embed/oFr4Ch_insg"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default SocialMedia;
