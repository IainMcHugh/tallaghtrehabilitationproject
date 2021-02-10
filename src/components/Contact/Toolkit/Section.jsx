import React from "react";

const Section = ({ title, subheading, data }) => (
  <div className="contact-box">
    {title && <h2 className="contact-heading">{title}</h2>}
    {subheading && <h3>{subheading}</h3>}
    <h4 className="contact-subtext-show">{data}</h4>
  </div>
);

export default Section;
