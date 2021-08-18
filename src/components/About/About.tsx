import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { RichText } from 'prismic-reactjs';

import './About.css';
import { usePrismic } from 'services/prismic';
import { Navigation } from './Toolkit';
import { Section } from 'components/Toolkit/Section/Section';
import { Spinner } from 'components/Toolkit/Spinner/Spinner';

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 768px) {
    height: 400px;
  }

  @media only screen and (min-width: 1200px) {
    height: 500px;
  }
`;

const BannerImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  background-position: center;
  filter: brightness(1.2);
  opacity: 0.8;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  height: auto;
  width: 100%;
`;

function About() {
  const [doc, setDoc] = useState(null);
  const prismic = usePrismic();

  var ids = ['YND1_BAAACQAXI4z', 'YND2qBAAACIAXJE1'];

  useEffect(() => {
    const fetchData = async () => {
      const response = await prismic.getByIDs(ids);
      response && setDoc(response.results);
    };

    fetchData();
  }, []);
  return (
    <div>
      <Helmet>
        <title>About Us</title>
        <meta
          name="description"
          content="Tallaght Rehabilitation Project is a Community based rehabilitation day-programme for people in recovery from drug and alcohol addiction and who reside in the Tallaght Wide area."
        />
      </Helmet>
      <div className="background-image-container"></div>
      {console.log(doc)}
      <BannerContainer>
        <BannerImage
          src={require('../../images/Team/group2.jpg')}
          alt="Team photo"
        />
      </BannerContainer>
      <div className="about-container">
        {doc ? (
          doc.map((d, index) => (
            <Section
              key={index}
              title={<RichText render={d.data.title} />}
              data={<RichText render={d.data.paragraph} />}
            />
          ))
        ) : (
          <SpinnerContainer>
            <Spinner />
          </SpinnerContainer>
        )}
        <div className="about-box">
          <h2 id="team-heading">Meet the team</h2>
          <ImageContainer>
            <Image
              src={require('../../images/Team/group1.png')}
              alt="Team photo"
            />
          </ImageContainer>
        </div>
        <Navigation />
      </div>
    </div>
  );
}

export default About;

{
  /* <div className="about-box">
        <h2 id="team-heading">Meet the team</h2>
        <div className="team-container" id="about-subtext-show">
          <MeetTeam
            isEven={false}
            pImg={imgs.patrick_daly}
            pName="Patrick Daly"
            pPosition="Manager"
            pDescription={text.patrickDaly}
          />
          <MeetTeam
            isEven={true}
            pImg={imgs.sonya_dillon}
            pName="Sonya Dillon"
            pPosition="Team Leader"
            pDescription={text.sonyaDillon}
          />
          <MeetTeam
            isEven={false}
            pImg={imgs.carla_whelan}
            pName="Carla Whelan"
            pPosition="Senior Project Worker"
            pDescription={text.carlaWhelan}
          />
          <MeetTeam
            isEven={true}
            pImg={imgs.dawn_brown}
            pName="Dawn Brown"
            pPosition="Senior Project Worker"
            pDescription={text.dawnBrown}
          />
          <MeetTeam
            isEven={false}
            pImg={imgs.patrick_maxwell}
            pName="Patrick Maxwell"
            pPosition="Project Worker"
            pDescription={text.patrickMaxwell}
          />
          <MeetTeam
            isEven={true}
            pImg={imgs.joan_cleere_neville}
            pName="Joan Cleere Neville"
            pPosition="Financial Administrator"
            pDescription={text.joanCleereNeville}
          />
          <MeetTeam
            isEven={true}
            pImg={imgs.sonja_dunne}
            pName="Sonja Dunne"
            pPosition="Community Employment Supervisor"
            pDescription={text.sonjaDunne}
          />
          <MeetTeam
            isEven={false}
            pImg={imgs.sonya_dillon}
            pName="Evelyn McCall"
            pPosition="Community Employment Interim Supervisor"
            pDescription={text.sonyaDillon}
          />
          <MeetTeam
            isEven={true}
            pImg={imgs.kim_kehoe}
            pName="Kim Kehoe"
            pPosition="Health & Safety Officer, Fire Officer & Senior Housekeeper"
            pDescription={text.kimKehoe}
          />
          <MeetTeam
            isEven={true}
            pImg={imgs.sandra_johnson}
            pName="Sandra Johnson"
            pPosition="Project Worker"
            pDescription={text.sandraJohnson}
          />
        </div>
      </div> */
}
