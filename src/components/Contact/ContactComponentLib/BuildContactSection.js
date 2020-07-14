import React from "react";

function BuildContactSection(props) {
  return (
    <div className="contact-box">
      {props.title ? <h2 className="contact-heading">{props.title}</h2> : null}

      {props.subheading ? <h3>{props.subheading}</h3> : null}

      <h4 className="contact-subtext-show">{props.data}</h4>
    </div>
  );
}

export default BuildContactSection;
