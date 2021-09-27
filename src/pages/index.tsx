import React from 'react';
import styled from 'styled-components';
// import { Facebook, Instagram, Twitter } from 'react-feather';

import { breakpoints } from 'styles/breakpoints';
import { DefaultLayout } from 'components/Layouts/DefaultLayout/DefaultLayout';
import { Carousel } from 'components/Toolkit/Carousel/Carousel';
import { Card } from 'components/Toolkit/Card/Card';
import { SocialMediaToggle } from 'components/Toolkit/SocialMediaToggle/SocialMediaToggle';

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

const CardLink = styled.a`
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

const SocialMediaData = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing.S24};
  bottom: ${({ theme }) => theme.spacing.S24};
  left: ${({ theme }) => theme.spacing.S8};
  right: ${({ theme }) => theme.spacing.S8};
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  ${breakpoints.large} {
    top: ${({ theme }) => theme.spacing.S48};
    bottom: ${({ theme }) => theme.spacing.S48};
    left: ${({ theme }) => theme.spacing.S80};
    right: ${({ theme }) => theme.spacing.S80};
  }
`;

const SocialMediaHeading = styled.h2`
  ${({ theme }) => theme.fontSize.F1824};
  color: ${({ theme }) => theme.colors.GREY_DARK};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  margin-bottom: ${({ theme }) => theme.spacing.S16};

  ${breakpoints.large} {
    ${({ theme }) => theme.fontSize.F2424};
  }
`;

const SocialMediaIcons = styled.div`
  display: grid;
  grid-template-columns: ${({ theme }) => `repeat(3, ${theme.spacing.S48})`};
  column-gap: ${({ theme }) => theme.spacing.S8};
  margin-bottom: ${({ theme }) => theme.spacing.S16};
`;

const SocialMediaIcon = styled.button`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.GREY_DARK};
`;

const SocialMediaEmbed = styled.div`
  height: 100%;
  overflow-y: hidden;
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
              <CardLink href="/dayprogramme">
                <SCard
                  imageUrl={require('images/dp_home.jpg')}
                  imageAlt="test"
                  heading="Day Programme"
                  subheading="Click here to find out about our Day Programme"
                />
              </CardLink>
              <CardLink href="/aftercare">
                <SCard
                  imageUrl={require('images/a_home.jpg')}
                  imageAlt="test"
                  heading="Aftercare"
                  subheading="Find out more about our Aftercare services"
                />
              </CardLink>
              <CardLink href="/roomrental">
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
            <SocialMediaToggle />
            {/* <SocialMediaData>
              <SocialMediaHeading>
                Follow us on Social Media!
              </SocialMediaHeading>
              <SocialMediaIcons>
                <SocialMediaIcon>
                  <Facebook size={32} />
                </SocialMediaIcon>
                <SocialMediaIcon>
                  <Instagram size={32} />
                </SocialMediaIcon>
                <SocialMediaIcon>
                  <Twitter size={32} />
                </SocialMediaIcon>
              </SocialMediaIcons>
              <SocialMediaEmbed>
                <div
                  className="fb-page"
                  data-href="https://www.facebook.com/pages/category/Community-Organization/Tallaght-Rehabilitation-Project-Tallaght-Wide-Aftercare-Services-174568196235168/"
                  data-tabs="timeline"
                  data-width="400"
                  data-height=""
                  data-small-header="true"
                  data-adapt-container-width="true"
                  data-hide-cover="false"
                  data-show-facepile="true"
                >
                  <blockquote
                    cite="https://www.facebook.com/pages/category/Community-Organization/Tallaght-Rehabilitation-Project-Tallaght-Wide-Aftercare-Services-174568196235168/"
                    className="fb-xfbml-parse-ignore"
                  >
                    <a href="https://www.facebook.com/pages/category/Community-Organization/Tallaght-Rehabilitation-Project-Tallaght-Wide-Aftercare-Services-174568196235168/">
                      Tallaght Rehabilitation Project &amp; Tallaght Wide
                      Aftercare Services
                    </a>
                  </blockquote>
                </div>
              </SocialMediaEmbed>
            </SocialMediaData> */}
          </SocialMediaSection>
        </HomeWrapper>
      </DefaultLayout>
    </>
  );
}

export { Home };
