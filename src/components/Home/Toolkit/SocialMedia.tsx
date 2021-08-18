import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-parallax';

import { SMSelector } from 'components/Home/Toolkit';

function SocialMedia() {
  const [videoOverlay, setVideoOverlay] = useState(false);

  useEffect(() => {
    videoOverlay
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'initial');
  });

  function handleClick(value: boolean) {
    setVideoOverlay(value);
  }

  return (
    <div>
      <Parallax bgImage={require('images/kiltalown_old.jpg')} strength={200}>
        <div style={{ height: 700 }}>
          <SMSelector handleClick={handleClick} />
        </div>
      </Parallax>
      {videoOverlay ? (
        <div className="overlay-video">
          <div className="overlay-video-container">
            <button onClick={() => setVideoOverlay(false)} id="close-overlay">
              <i
                className="material-icons"
                style={{
                  fontSize: '36px',
                  backgroundColor: 'transparent',
                  color: '#f4d90c',
                }}
              >
                close
              </i>
            </button>
            <iframe
              title="Youtube video"
              src="https://www.youtube.com/embed/oFr4Ch_insg"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default SocialMedia;
