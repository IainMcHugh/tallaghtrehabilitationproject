import React from 'react';

function SMYoutube({ active, handleClick }) {
  const updateVideoOverlay = (value) => {
    handleClick(value);
  };

  return (
    <div className={active ? 'SM-embed-active' : 'SM-embed-container'}>
      <div onClick={() => updateVideoOverlay(true)} className="video_thumbnail">
        <img
          className="video-play-button"
          src={require('../../../images/play_button_out.png')}
          alt="Play Button"
        />
      </div>
    </div>
  );
}

export default SMYoutube;
