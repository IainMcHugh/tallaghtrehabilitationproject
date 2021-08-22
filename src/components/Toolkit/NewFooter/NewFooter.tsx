import React from 'react';
import styled from 'styled-components';
import { Facebook, Instagram, Twitter } from 'react-feather';

import { breakpoints } from 'styles/breakpoints';
import { Link } from 'components/Toolkit/Link/Link';

const Container = styled.footer`
  background-color: ${({ theme }) => theme.colors.GREY_DARK};
  color: ${({ theme }) => theme.colors.YELLOW};
  padding: ${({ theme }) => `${theme.spacing.S24} ${theme.spacing.S8}`};
  border-radius: ${({ theme }) => theme.borderRadius.top8};
`;

const Wrapper = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
`;

const Text = styled.p`
  ${({ theme }) => theme.fontSize.F1216}

  ${breakpoints.medium} {
    ${({ theme }) => theme.fontSize.F1824}
  }
`;

const GovernmentAgenciesText = styled(Text)`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.S24};
`;

const AffiliateContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, 50px);
  gap: ${({ theme }) => theme.spacing.S12};
  margin-bottom: ${({ theme }) => theme.spacing.S24};

  ${breakpoints.medium} {
    grid-template-rows: repeat(2, 80px);
  }
`;

const AffiliateImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  background-color: ${({ theme }) => theme.colors.WHITE};
  border-radius: ${({ theme }) => theme.borderRadius.all4};
`;

const RegistrationData = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.S24};
  flex-direction: column;

  ${breakpoints.medium} {
    flex-direction: row;
  }
`;

const RegistrationText = styled(Text)`
  text-align: left;

  ${breakpoints.medium} {
    text-align: center;
  }
`;

const SRegistrationText = styled(RegistrationText)`
  margin-bottom: ${({ theme }) => theme.spacing.S16};

  ${breakpoints.medium} {
    margin-bottom: 0;
  }
`;

const BottomSection = styled.div`
  display: flex;
  flex-direction: column;

  ${breakpoints.medium} {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-end;
  }
`;

const ContactData = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.S24};

  ${breakpoints.medium} {
    margin-bottom: 0;
  }
`;

const ContactText = styled(Text)``;

const ContactLink = styled(Link)`
  display: block;
  ${({ theme }) => theme.fontSize.F1216}

  ${breakpoints.medium} {
    ${({ theme }) => theme.fontSize.F1824}
  }
`;

const UsefulLinksData = styled.div``;

const UsefulLinksHeader = styled(Text)`
  text-decoration: underline;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.S20};
`;

const SLink = styled(Link)`
  display: block;
  ${({ theme }) => theme.fontSize.F1216}
  margin-bottom: ${({ theme }) => theme.spacing.S8};

  &:last-child {
    margin-bottom: 0;
  }

  ${breakpoints.medium} {
    ${({ theme }) => theme.fontSize.F1824}
  }
`;

const SocialMediaData = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 144px;
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${breakpoints.medium} {
    position: initial;
    flex-direction: column;
    width: 32px;
    height: 144px;
  }
`;

const SocialMediaIcon = styled.a`
  color: ${({ theme }) => theme.colors.YELLOW};
`;

function NewFooter() {
  return (
    <Container>
      <Wrapper>
        <GovernmentAgenciesText>
          Tallaght Rehabilitation Project CLG is kindly assisted and supported
          by the following Irish government agencies:
        </GovernmentAgenciesText>
        <AffiliateContainer>
          <AffiliateImage
            src={require('images/tallaght_drug_and_alcohol_task_force_logo.jpg')}
            alt=""
          />
          <AffiliateImage
            src={require('images/SocialProtection_MARK_MASTER_Std_Colour.jpg')}
            alt=""
          />
          <AffiliateImage
            src={require('images/hse_logo_border_2016_web.jpg')}
            alt=""
          />
          <AffiliateImage
            src={require('images/south-dublin-county-council.png')}
            alt=""
          />
        </AffiliateContainer>
        <RegistrationData>
          <SRegistrationText>Registration Number: 292608</SRegistrationText>
          <RegistrationText>
            Registered Charity Number: 20044060
          </RegistrationText>
        </RegistrationData>
        <BottomSection>
          <ContactData>
            <ContactText>Tallaght Rehabilitation Project,</ContactText>
            <ContactText>Kiltalown House,</ContactText>
            <ContactText>Jobstown,</ContactText>
            <ContactText>Tallaght</ContactText>
            <ContactText>Dublin 24</ContactText>
            <ContactText>D24 X59C</ContactText>
            <ContactText>D24 X59C</ContactText>
            <ContactLink href="tel:353871476747">01 459 77 05</ContactLink>
            <ContactLink href="mailto:info@tallaghtrehabproject.ie">
              info@tallaghtrehabproject.ie
            </ContactLink>
          </ContactData>
          <UsefulLinksData>
            <UsefulLinksHeader>Useful Links</UsefulLinksHeader>
            <SLink href="#">Contact</SLink>
            <SLink href="#">Donate</SLink>
            <SLink href="#">Privacy Policy</SLink>
            <SLink href="#">Web Designer</SLink>
          </UsefulLinksData>
          <SocialMediaData>
            <SocialMediaIcon href="#">
              <Facebook size={32} />
            </SocialMediaIcon>
            <SocialMediaIcon href="#">
              <Instagram size={32} />
            </SocialMediaIcon>
            <SocialMediaIcon href="#">
              <Twitter size={32} />
            </SocialMediaIcon>
          </SocialMediaData>
        </BottomSection>
      </Wrapper>
    </Container>
  );
}

export { NewFooter };
