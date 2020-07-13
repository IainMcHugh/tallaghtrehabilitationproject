import React from "react";

function BuildMeetTeam(props) {
  return (
    <div className="team-1">
      <img
        id="about-subtext-show"
        className="person-1-image"
        src={require("../../../images/profile_default.png")}
        alt="Profile"
      />
      <div className="person-1-text">
        <h3>{props.pName}</h3>
        <h4>{props.pPosition}</h4>
        <h5>{props.pDescription}</h5>
      </div>
    </div>
  );
}

export default BuildMeetTeam;
