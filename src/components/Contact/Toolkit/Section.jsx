import React from "react";

const Section = ({ title, subheading, data }) => (
  <div className="contact-box" id="about-subtext-show">
    {title && <h2 className="contact-heading">{title}</h2>}
    {subheading && <h3>{subheading}</h3>}
    <div className="contact-subtext-show">
      {data.map((value, index) => (
        <h4 key={index}>{value}</h4>
      ))}
    </div>
  </div>
);

export default Section;
