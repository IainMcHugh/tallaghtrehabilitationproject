import React, { ReactNode } from 'react';

interface IDPSection {
  title: string | ReactNode;
  subheading: string | ReactNode;
  data: string | ReactNode;
}

const DPSection = ({ title, subheading, data }: IDPSection) => (
  <div className="dp-box">
    <h2 className="dp-heading">{title}</h2>
    {subheading && <h3>{subheading}</h3>}
    <h4 className="dp-subtext-show">{data}</h4>
  </div>
);

export default DPSection;
