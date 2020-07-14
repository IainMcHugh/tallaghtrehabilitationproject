import React from "react";

function BuildDPSection(props) {
  return (
    <div className="dp-box">
      <h2 className="dp-heading">{props.title}</h2>
      {props.subheading ? <h3>{props.subheading}</h3> : null}
      <h4 className="dp-subtext-show">{props.data}</h4>
    </div>
  );
}

export default BuildDPSection;
