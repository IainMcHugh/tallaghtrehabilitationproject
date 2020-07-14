import React from "react";

function BuildAboutSection(props) {
  return (
    <div className="about-box">

      {props.title ? 
      <h2 className="about-heading">{props.title}</h2> :
      null}
      
      {props.subheading ? 
      <h3>{props.subheading}</h3> :
      null}
      
      <h4 className="about-subtext-show">{props.data}</h4>
    </div>
  );
}

export default BuildAboutSection;
