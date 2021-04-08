import React from 'react';

const AboutSection = ({ title, subheading, data }) => (
  <div className="about-box">
    {title && <h2 className="about-heading">{title}</h2>}
    {subheading && <h3>{subheading}</h3>}
    <h4 className="about-subtext-show">{data}</h4>
  </div>
);

export default AboutSection;
