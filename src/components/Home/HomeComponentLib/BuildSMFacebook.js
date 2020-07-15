import React from 'react';
import { FacebookProvider, Page } from "react-facebook";

function BuildSMFacebook() {
    return (
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
    )
}

export default BuildSMFacebook
