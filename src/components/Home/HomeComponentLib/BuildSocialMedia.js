import React, { useState, useEffect } from 'react';
import { Parallax } from "react-parallax";
import { FacebookProvider, Page } from "react-facebook";

function BuildSocialMedia() {

    const [videoOverlay, setVideoOverlay] = useState(false);

    useEffect(() => {
        videoOverlay ?
            document.body.style.overflow = "hidden"
        :
            document.body.style.overflow = "initial"
    })

    return (
        <div>
            <Parallax bgImage={require("../../../images/flowers.jpg")} strength={700}>
          <div className="video-background" style={{ height: 700 }}>
            <div className="sm-left">
              <div onClick={()=>setVideoOverlay(1)} className="video_thumbnail">
                <img
                  className="video-play-button"
                  src={require("../../../images/play_button_out.png")}
                  alt="play button"
                />
              </div>
            </div>
            <div className="sm-right">
              <h3>Check out our Facebook</h3>
              <FacebookProvider appId="878914422536169">
                <Page
                  href="https://www.facebook.com/Tallaght-Rehabilitation-Project-Tallaght-Wide-Aftercare-Services-174568196235168/"
                  width="300"
                  tabs="timeline"
                />
              </FacebookProvider>
            </div>
          </div>
        </Parallax>
        {videoOverlay ? (
          <div class="overlay-video">
            <div class="overlay-video-container">
              <button onClick={()=>setVideoOverlay(0)} id="close-overlay">
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
        ) : (
          <div></div>
        )}
        </div>
    )
}

export default BuildSocialMedia;
