import React from 'react';

interface ISMYoutube {
  active: boolean;
  handleClick: (t: boolean) => void;
}

function SMYoutube({ active, handleClick }: ISMYoutube) {
  const updateVideoOverlay = (value: boolean) => {
    handleClick(value);
  };

  return (
    <div className={active ? 'SM-embed-active' : 'SM-embed-container'}>
      <div onClick={() => updateVideoOverlay(true)} className="video_thumbnail">
        <img
          className="video-play-button"
          src={require('images/play_button_out.png')}
          alt="Play Button"
        />
      </div>
    </div>
  );
}

export default SMYoutube;
