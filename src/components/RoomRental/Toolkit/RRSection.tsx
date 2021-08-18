import React from 'react';
import type { ReactNode } from 'react';

interface ISection {
  title: string | ReactNode;
  subheading: string | ReactNode;
  data: string | ReactNode;
}

const RRSection = ({ title, subheading, data }: ISection) => (
  <div className="rr-box">
    <h2 className="rr-heading">{title}</h2>
    {subheading && <h3>{subheading}</h3>}
    <h4 className="rr-subtext-show">{data}</h4>
  </div>
);

export default RRSection;
