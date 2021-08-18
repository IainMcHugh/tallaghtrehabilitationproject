import React, { useState } from 'react';
import {
  SMFacebook,
  // SMYoutube,
  SMTwitter,
  SMInstagram,
} from 'components/Home/Toolkit';

type SocialMedia = 'fb' | 'tw' | 'ig';
// interface ISMSelector {
//   handleClick: (t: boolean) => void;
// }

function SMSelector() {
  // { handleClick }: ISMSelector
  // const [ytActive, setYtActive] = useState(false);
  const [fbActive, setFbActive] = useState<boolean>(false);
  const [igActive, setIgActive] = useState<boolean>(false);
  const [twActive, setTwActive] = useState<boolean>(false);

  function updateActiveSM(activeSM?: SocialMedia) {
    switch (activeSM) {
      // case "yt":
      //   setYtActive(true);
      //   setFbActive(false);
      //   setIgActive(false);
      //   setTwActive(false);
      //   break;
      case 'fb':
        // setYtActive(false);
        setFbActive(true);
        setIgActive(false);
        setTwActive(false);
        break;
      case 'ig':
        // setYtActive(false);
        setFbActive(false);
        setIgActive(true);
        setTwActive(false);
        break;
      case 'tw':
        // setYtActive(false);
        setFbActive(false);
        setIgActive(false);
        setTwActive(true);
        break;
      default:
        // setYtActive(false);
        setFbActive(false);
        setIgActive(false);
        setTwActive(false);
    }
  }

  return (
    <div style={{ height: 700 }}>
      <div className="SM-embeds-container">
        {/* <SMYoutube active={ytActive} handleClick={handleClick} /> */}
        <SMFacebook active={fbActive} />
        <SMInstagram active={igActive} />
        <SMTwitter active={twActive} />
      </div>
      <div className="SM-selector-container">
        {/* <div id="SM-selector-youtube" onClick={() => updateActiveSM("yt")}>
          Youtube
        </div> */}
        <div id="SM-selector-facebook" onClick={() => updateActiveSM('fb')}>
          Facebook
        </div>
        <div id="SM-selector-instagram" onClick={() => updateActiveSM('ig')}>
          Instagram
        </div>
        <div id="SM-selector-twitter" onClick={() => updateActiveSM('tw')}>
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
