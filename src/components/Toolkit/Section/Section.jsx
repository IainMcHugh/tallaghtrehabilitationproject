import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 90%;
  margin: 40px auto;
  font-family: lemon-milk;
  border-radius: 0 5px 5px 5px;
  z-index: 10;

  @media only screen and (min-width: 768px) {
    width: 80%;
  }

  @media only screen and (min-width: 1004px) {
    width: 70%;
  }

  @media only screen and (min-width: 1200px) {
    width: 60%;
  }
}
`;

const Title = styled.div`
  & > h2 {
    border-left: 15px solid #005987;
    text-align: center;
    background-color: #f4d90c;
    color: #005987;
    border-radius: 0 5px 5px 0;
    font-size: 28px;
    z-index: 10;
  }

  @media only screen and (min-width: 768px) {
    & > h2 {
      width: 100%;
      margin: 50px auto;
      text-align: left;
      padding-left: 40px;
    }
  }
`;

const SubTitle = styled.div`
  & > h3 {
    width: 70%;
    margin: 30px auto;
    padding: 10px 0;
    font-family: 'Barlow', 'san-serif';
    font-style: italic;
    font-size: 22px;
    font-weight: 500;
    text-align: center;
    background-color: rgba(244, 217, 12, 0.2);
    color: rgb(31, 31, 31);
    border-radius: 5px;
  }

  @media only screen and (min-width: 768px) {
    & > h3 {
      font-size: 28px;
      margin-bottom: 50px;
    }
  }
`;

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

const Section = ({ title, subheading, data }) => (
  <Container>
    <Title>{title}</Title>
    <SubTitle>{subheading}</SubTitle>
    {/* <h4 className="about-subtext-show">{data}</h4> */}
    <Paragraph>{data}</Paragraph>
  </Container>
);

export { Section };
