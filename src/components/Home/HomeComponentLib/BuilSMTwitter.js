import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

function BuilSMTwitter(props) {
  return (
    <div className={props.active ? "SM-embed-active" : "SM-embed-container"}>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="trpdublin"
        theme="dark"
        options={{ height: 500 }}
      />
    </div>
  );
}

export default BuilSMTwitter;
