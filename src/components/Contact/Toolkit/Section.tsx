import React from 'react';
import type { ReactNode } from 'react';

interface ISection {
  title: string | ReactNode;
  subheading: string | ReactNode;
  data: string | ReactNode;
}

const Section = ({ title, subheading, data }: ISection) => (
  <div className="contact-box" id="about-subtext-show">
    {title && <h2 className="contact-heading">{title}</h2>}
    {subheading && <h3>{subheading}</h3>}
    <div className="contact-subtext-show">{data}</div>
  </div>
);

export default Section;
