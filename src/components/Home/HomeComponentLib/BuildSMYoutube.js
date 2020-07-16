import React, { useState, useEffect } from "react";

function BuildSMYoutube(props) {
  const [videoOverlay, setVideoOverlay] = useState(false);

  useEffect(() => {
    videoOverlay
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "initial");
  });

  return (
    <div className={props.active ? "SM-embed-active" : "SM-embed-container"}>
      <div onClick={() => setVideoOverlay(1)} className="video_thumbnail">
        <img
          className="video-play-button"
          src={require("../../../images/play_button_out.png")}
          alt="Play Button"
        />
      </div>
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

export default BuildSMYoutube;
