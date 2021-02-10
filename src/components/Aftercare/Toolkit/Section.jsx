import React from "react";

const Section = ({ title, subheading, data }) => (
  <div className="aftercare-box">
    <h2 className="aftercare-heading">{title}</h2>
    {subheading && <h3>{subheading}</h3>}
    <h4 className="aftercare-subtext-show">{data}</h4>
  </div>
);

export default Section;
