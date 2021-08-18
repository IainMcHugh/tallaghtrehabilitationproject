import React from 'react';
import type { ReactNode } from 'react';
import styled from 'styled-components';

interface ISection {
  title: string | ReactNode;
  subheading?: string | ReactNode;
  data?: string | ReactNode;
}

const Paragraph = styled.div`
  & > h4,
  & > p {
    font-family: 'Barlow', 'san-serif';
    margin: 10px 5px;
    font-weight: 300;
    font-size: 16px;
  }

  & > ul {
    margin: 50px auto;
  }

  & > ul > li {
    margin: 30px auto;
  }

  @media only screen and (min-width: 768px) {
    & > h4,
    & > p {
      font-size: 18px;
    }
  }

  @media only screen and (min-width: 1000px) {
    & > h4,
    & > p {
      font-size: 22px;
    }

    & > ul > li {
      font-size: 24px;
      margin-left: 2%;
    }
  }
`;

const AboutSection = ({ title, subheading, data }: ISection) => (
  <div className="about-box">
    {title && title}
    {subheading && subheading}
    {/* <h4 className="about-subtext-show">{data}</h4> */}
    <Paragraph>{data}</Paragraph>
  </div>
);

export default AboutSection;
