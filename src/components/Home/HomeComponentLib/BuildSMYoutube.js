import React from "react";

function BuildSMYoutube(props) {
  
  const updateVideoOverlay = (value) => {
    props.handleClick(value);
  }

  return (
    <div className={props.active ? "SM-embed-active" : "SM-embed-container"}>
      <div onClick={() => updateVideoOverlay(true)} className="video_thumbnail">
        <img
          className="video-play-button"
          src={require("../../../images/play_button_out.png")}
          alt="Play Button"
        />
      </div>
      
    </div>
  );
}

export default BuildSMYoutube;
