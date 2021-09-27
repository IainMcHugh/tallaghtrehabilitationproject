import React from 'react';
import type { ReactNode } from 'react';

interface ISection {
  title: string | ReactNode;
  subheading: string | ReactNode;
  data: string | ReactNode;
}

const Section = ({ title, subheading, data }: ISection) => (
  <div className="aftercare-box">
    <h2 className="aftercare-heading">{title}</h2>
    {subheading && <h3>{subheading}</h3>}
    <h4 className="aftercare-subtext-show">{data}</h4>
  </div>
);

export default Section;
