import React from 'react';

const DPSection = ({ title, subheading, data }) => (
  <div className="dp-box">
    <h2 className="dp-heading">{title}</h2>
    {subheading && <h3>{subheading}</h3>}
    <h4 className="dp-subtext-show">{data}</h4>
  </div>
);

export default DPSection;
