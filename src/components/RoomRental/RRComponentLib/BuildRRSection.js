import React from "react";

function BuildRRSection(props) {
  return (
    <div className="rr-box">
      <h2 className="rr-heading">{props.title}</h2>
      {props.subheading ? <h3>{props.subheading}</h3> : null}
      <h4 className="rr-subtext-show">{props.data}</h4>
    </div>
  );
}

export default BuildRRSection;
