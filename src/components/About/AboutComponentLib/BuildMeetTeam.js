import React from "react";

function BuildMeetTeam(props) {
  return (
    <div className="team-member-container">
      <div className="team_image_container">
        <img
          className="team-member-image"
          src={props.pImg}
          alt="Profile"
        />
      </div>
      <div className="team-member-text">
        <h2>{props.pName}</h2>
        <h4>{props.pPosition}</h4>
        <h5>{props.pDescription}</h5>
      </div>
    </div>
  );
}

export default BuildMeetTeam;
