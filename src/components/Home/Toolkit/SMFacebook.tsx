import React from 'react';
// import { FacebookProvider, Page } from 'react-facebook';

interface ISMYoutube {
  active: boolean;
}

function SMFacebook({ active }: ISMYoutube) {
  return (
    <div className={active ? 'SM-embed-active' : 'SM-embed-container'}>
      {/* <FacebookProvider appId="878914422536169">
        <Page
          href="https://www.facebook.com/Tallaght-Rehabilitation-Project-Tallaght-Wide-Aftercare-Services-174568196235168/"
          width="300"
          tabs="timeline"
        />
      </FacebookProvider> */}
      {/* <div
        className="fb-page"
        data-href="https://www.facebook.com/Tallaght-Rehabilitation-Project-Tallaght-Wide-Aftercare-Services-174568196235168/"
        data-tabs="timeline"
        data-width=""
        data-height="500"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://www.facebook.com/Tallaght-Rehabilitation-Project-Tallaght-Wide-Aftercare-Services-174568196235168/"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/Tallaght-Rehabilitation-Project-Tallaght-Wide-Aftercare-Services-174568196235168/">
            Tallaght Rehabilitation Project &amp; Tallaght Wide Aftercare
            Services
          </a>
        </blockquote>
      </div> */}
    </div>
  );
}

export default SMFacebook;
