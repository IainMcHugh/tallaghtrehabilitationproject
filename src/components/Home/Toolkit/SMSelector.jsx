import React, { useState } from "react";
import { SMFacebook, SMYoutube, SMTwitter, SMInstagram } from ".";

function SMSelector({ handleClick }) {
  const [social, setSocial] = useState(0);
  const [ytActive, setYtActive] = useState(0);
  const [fbActive, setFbActive] = useState(0);
  const [igActive, setIgActive] = useState(0);
  const [twActive, setTwActive] = useState(0);

  function updateActiveSM(activeSM) {
    switch (activeSM) {
      case "yt":
        setYtActive(1);
        setFbActive(0);
        setIgActive(0);
        setTwActive(0);
        break;
      case "fb":
        setYtActive(0);
        setFbActive(1);
        setIgActive(0);
        setTwActive(0);
        break;
      case "ig":
        setYtActive(0);
        setFbActive(0);
        setIgActive(1);
        setTwActive(0);
        break;
      case "tw":
        setYtActive(0);
        setFbActive(0);
        setIgActive(0);
        setTwActive(1);
        break;
      default:
        setYtActive(0);
        setFbActive(0);
        setIgActive(0);
        setTwActive(0);
    }
  }

  return (
    <div style={{ height: 700 }}>
      <div className="SM-embeds-container">
        <SMYoutube active={ytActive} handleClick={handleClick} />
        <SMFacebook active={fbActive} />
        <SMInstagram active={igActive} />
        <SMTwitter active={twActive} />
      </div>
      <div className="SM-selector-container">
        <div id="SM-selector-youtube" onClick={() => updateActiveSM("yt")}>
          Youtube
        </div>
        <div id="SM-selector-facebook" onClick={() => updateActiveSM("fb")}>
          Facebook
        </div>
        <div id="SM-selector-instagram" onClick={() => updateActiveSM("ig")}>
          Instagram
        </div>
        <div id="SM-selector-twitter" onClick={() => updateActiveSM("tw")}>
          Twitter
        </div>
        <div id="SM-selector-hide" onClick={() => updateActiveSM()}>
          Hide
        </div>
      </div>
    </div>
  );
}

export default SMSelector;
