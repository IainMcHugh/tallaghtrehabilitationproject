import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

interface ISMYoutube {
  active: boolean;
}

function SMTwitter({ active }: ISMYoutube) {
  return (
    <div className={active ? 'SM-embed-active' : 'SM-embed-container'}>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="trpdublin"
        theme="dark"
        options={{ height: 500 }}
      />
    </div>
  );
}

export default SMTwitter;
