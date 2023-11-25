import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { breakpoints } from 'styles/breakpoints';
import { DefaultLayout } from 'components/Layouts/DefaultLayout/DefaultLayout';
import { Carousel } from 'components/Toolkit/Carousel/Carousel';
import { Card } from 'components/Toolkit/Card/Card';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
`;

const HeroSection = styled.section`
  width: 100%;
  height: 80vh;
  position: relative;
  display: flex;
  overflow: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const HeroImage = styled.img`
  height: 100%;
  width: auto;
  margin: 0 auto;
  object-fit: cover;
`;

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: ${({ theme }) => theme.spacing.S48};
  left: 0;
  right: 0;
  height: 400px;
  z-index: 9900;
`;

const ServicesSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => `0 ${theme.spacing.S8}`};
  margin-bottom: ${({ theme }) => theme.spacing.S72};
  width: 100%;
  box-sizing: border-box;
`;

const ServicesHeader = styled.h2`
  ${({ theme }) => theme.fontSize.F1824}
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.GREY_DARK};
  margin-bottom: ${({ theme }) => theme.spacing.S48};

  ${breakpoints.large} {
    ${({ theme }) => theme.fontSize.F2424};
  }
`;

const ServicesCardContainer = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${breakpoints.large} {
    max-width: none;
    flex-direction: row;
    width: 80%;
    margin: 0 auto;
  }
`;

const CardLink = styled(Link)`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.S24};

  &:last-child {
    margin-bottom: 0;
  }

  ${breakpoints.large} {
    width: 30%;
    height: 250px;
    margin-bottom: 0;
    margin-right: ${({ theme }) => theme.spacing.S28};
    flex: 1 1 0px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const SCard = styled(Card)`
  ${breakpoints.large} {
    height: 250px;
  }
`;

const SocialMediaSection = styled.section`
  position: relative;
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  margin: ${({ theme }) => `0 auto ${theme.spacing.S24}`};

  ${breakpoints.large} {
    margin-bottom: ${({ theme }) => theme.spacing.S48};
    border-radius: ${({ theme }) => theme.borderRadius.all8};
  }
`;

const SocialMediaImage = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
  box-shadow: ${({ theme }) => theme.shadow.drop};
  border-radius: ${({ theme }) => theme.borderRadius.all8};
`;

function Home() {
  const carouselData = [
    {
      title: 'Mission Statement',
      body: 'We believe in the advantage of rehabilitation within our community, as addiction can happen in social & emotional isolation, we are here to provide a supportive and nurturing environment where participants are encouraged to work in an open & therapeutic setting on their previous drug/alcohol use.',
    },
    {
      title: 'Values',
      body: 'Tallaght Rehabilitation Project values and respects the rights of all our participants to engage in a recovery process that is positive, honest, and compassionate, dignified and also meets the needs of our clients through progressive pathways and emotional growth.',
    },
    {
      title: 'Commitment and Growth',
      body: 'The Tallaght Rehabilitation Project Organisation is committed to providing quality services for people who are in recovery from drug and alcohol addiction. Our organisation and programmes strive to provide quality based services which are evidence based and promote good corporate governance in order to be a leader in local community based therapeutic rehabilitation.',
    },
  ];

  return (
    <>
      <DefaultLayout>
        <Helmet>
          <title>Tallaght Rehabilitation Project</title>
          <meta
            name="description"
            content="From all Staff, Participants, and Board of Management&nbsp;we would like to welcome you to the Tallaght Rehabilitation Project website."
          />
        </Helmet>
        <HomeWrapper>
          <HeroSection>
            <HeroImage src={require('images/TRPFrontEdit.png')} alt="hero" />
            <HeroContainer>
              <Carousel
                width={[304, 304, 500]}
                items={carouselData}
                speed={8000}
              />
            </HeroContainer>
          </HeroSection>
          <ServicesSection>
            <ServicesHeader>Services we offer</ServicesHeader>
            <ServicesCardContainer>
              <CardLink to="/dayprogramme">
                <SCard
                  imageUrl={require('images/dp_home.jpg')}
                  imageAlt="test"
                  heading="Day Programme"
                  subheading="Click here to find out about our Day Programme"
                />
              </CardLink>
              <CardLink to="/aftercare">
                <SCard
                  imageUrl={require('images/a_home.jpg')}
                  imageAlt="test"
                  heading="Aftercare"
                  subheading="Find out more about our Aftercare services"
                />
              </CardLink>
              <CardLink to="/roomrental">
                <SCard
                  imageUrl={require('images/stock_roomrental3.jpg')}
                  imageAlt="test"
                  heading="Room Rental"
                  subheading="Learn more about our room rentals and meetings"
                />
              </CardLink>
            </ServicesCardContainer>
          </ServicesSection>
          <SocialMediaSection>
            <SocialMediaImage
              src={require('images/kiltalown_old.jpg')}
              alt="Kiltalown old"
            />
          </SocialMediaSection>
        </HomeWrapper>
      </DefaultLayout>
    </>
  );
}

export { Home };
