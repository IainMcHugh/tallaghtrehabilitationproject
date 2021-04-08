import React from 'react';

const RRSection = ({ title, subheading, data }) => (
  <div className="rr-box">
    <h2 className="rr-heading">{title}</h2>
    {subheading && <h3>{subheading}</h3>}
    <h4 className="rr-subtext-show">{data}</h4>
  </div>
);

export default RRSection;
