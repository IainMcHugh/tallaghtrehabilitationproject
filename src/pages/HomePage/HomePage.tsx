import React from 'react';
import styled from 'styled-components';

import { DefaultLayout } from 'components/Layouts/DefaultLayout/DefaultLayout';
import { Carousel } from 'components/Toolkit/Carousel/Carousel';
import { Card } from 'components/Toolkit/Card/Card';

const HomepageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
`;

const HeroSection = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const HeroImage = styled.img`
  height: 100%;
  width: auto;
  object-fit: cover;
  box-shadow: ${({ theme }) => theme.shadow.drop};
`;

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: ${({ theme }) => theme.spacing.S48};
  left: 0;
  right: 0;
  height: 300px;
  z-index: 9900;
`;

const ServicesSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => `0 ${theme.spacing.S8}`};
`;

const ServicesHeader = styled.h2`
  ${({ theme }) => theme.fontSize.F1824}
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.GREY_DARK};
  margin-bottom: ${({ theme }) => theme.spacing.S24};
`;

const SCard = styled(Card)`
  margin-bottom: ${({ theme }) => theme.spacing.S24};

  &:last-child {
    margin-bottom: 0;
  }
`;

const Skeleton = styled.div`
  height: 100vh;
`;

function HomePage() {
  return (
    <>
      <DefaultLayout>
        <HomepageWrapper>
          <HeroSection>
            <HeroImage src={require('images/TRPFrontEdit.png')} alt="hero" />
            <HeroContainer>
              <Carousel width={292} items={data} speed={8000} />
            </HeroContainer>
          </HeroSection>
          <ServicesSection>
            <ServicesHeader>Services we offer</ServicesHeader>
            <SCard
              imageUrl={require('images/dp_home.jpg')}
              imageAlt="test"
              heading="Day Programme"
              subheading="Click here to find out about our Day Programme"
            />
            <SCard
              imageUrl={require('images/dp_home.jpg')}
              imageAlt="test"
              heading="Aftercare"
              subheading="Find out more about our Aftercare services"
            />
            <SCard
              imageUrl={require('images/dp_home.jpg')}
              imageAlt="test"
              heading="Room Rental"
              subheading="Learn more about our room rentals and meetings"
            />
          </ServicesSection>
          <Skeleton />
        </HomepageWrapper>
      </DefaultLayout>
    </>
  );
}

const data = [
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

export { HomePage };
