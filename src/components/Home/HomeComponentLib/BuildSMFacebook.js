import React from "react";
import { FacebookProvider, Page } from "react-facebook";

function BuildSMFacebook(props) {
  return (
    <div className={props.active ? "SM-embed-active" : "SM-embed-container"}>
      <FacebookProvider appId="878914422536169">
        <Page
          href="https://www.facebook.com/Tallaght-Rehabilitation-Project-Tallaght-Wide-Aftercare-Services-174568196235168/"
          width="300"
          tabs="timeline"
        />
      </FacebookProvider>
    </div>
  );
}

export default BuildSMFacebook;
