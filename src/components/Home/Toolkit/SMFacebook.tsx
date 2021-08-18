import React from 'react';
import { FacebookProvider, Page } from 'react-facebook';

interface ISMYoutube {
  active: boolean;
}

function SMFacebook({ active }: ISMYoutube) {
  return (
    <div className={active ? 'SM-embed-active' : 'SM-embed-container'}>
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

export default SMFacebook;
