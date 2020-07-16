import React, { useState, useEffect } from "react";
import BuildSMFacebook from "./BuildSMFacebook";
import BuildSMYoutube from "./BuildSMYoutube";
import BuildSMTwitter from "./BuilSMTwitter";

function BuildSMSelector() {
  const [social, setSocial] = useState(0);
  const [ytActive, setYtActive] = useState(0);
  const [fbActive, setFbActive] = useState(0);
  const [igActive, setIgActive] = useState(0);
  const [twActive, setTwActive] = useState(0);

  return (
    <div style={{ height: 700}}>
      <div className="SM-embeds-container">
        <BuildSMYoutube active={ytActive} />
        <BuildSMFacebook active={fbActive} />
        <BuildSMTwitter active={twActive} />
      </div>
      <div className="SM-selector-container">
        <div
          id="SM-selector-youtube"
          onMouseOver={() => setYtActive(1)}
          onMouseOut={() => setYtActive(0)}
        >
          Youtube
        </div>
        <div
          id="SM-selector-facebook"
          onMouseOver={() => setFbActive(1)}
          onMouseOut={() => setFbActive(0)}
        >
          Facebook
        </div>
        <div
          id="SM-selector-instagram"
          onMouseOver={() => setSocial("ig")}
          onMouseOut={() => setSocial(0)}
        >
          Instagram
        </div>
        <div
          id="SM-selector-twitter"
          onMouseOver={() => setTwActive(1)}
          onMouseOut={() => setTwActive(0)}
        >
          Twitter
        </div>
      </div>
    </div>
  );
}

export default BuildSMSelector;
