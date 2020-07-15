import React from "react";
import { Parallax } from "react-parallax";
import BuildSMYoutube from "./BuildSMYoutube";
import BuildSMFacebook from "./BuildSMFacebook";
import BuildSMSelector from "./BuildSMSelector";

function BuildSocialMedia() {

  return (
    <div>
      <Parallax
        bgImage={require("../../../images/Moydrum_Castle_back_view_b.jpg")}
        strength={700}
      >
        <div style={{ height: 700}}>
        <BuildSMSelector />
        </div>
        {/* <div className="video-background" style={{ height: 700 }}>
          <BuildSMYoutube />
          <BuildSMFacebook />
        </div> */}
      </Parallax>
    </div>
  );
}

export default BuildSocialMedia;
