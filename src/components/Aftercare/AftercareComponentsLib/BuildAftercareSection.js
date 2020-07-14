import React from "react";

function BuildAftercareSection(props) {
  return (
    <div className="aftercare-box">
      <h2 className="aftercare-heading">{props.title}</h2>
      {props.subheading ? <h3>{props.subheading}</h3> : null}
      <h4 className="aftercare-subtext-show">{props.data}</h4>
    </div>
  );
}

export default BuildAftercareSection;
