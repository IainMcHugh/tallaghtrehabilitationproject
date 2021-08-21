import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  height: 600px;
  background-color: ${({ theme }) => theme.colors.GREY_DARK};
  color: ${({ theme }) => theme.colors.YELLOW};
  padding: ${({ theme }) => `${theme.spacing.S24} ${theme.spacing.S8}`};
  border-radius: ${({ theme }) => theme.borderRadius.top8};
`;

const Text = styled.p`
  ${({ theme }) => theme.fontSize.F1216}
`;

const AffiliateContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto-fit;
  grid-template-rows: repeat(4, 125px);
  row-gap: ${({ theme }) => theme.spacing.S12};
`;

const AffiliateImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

function NewFooter() {
  return (
    <Container>
      <Text>
        Tallaght Rehabilitation Project CLG is kindly assisted and supported by
        the following Irish government agencies:
      </Text>
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
    </Container>
  );
}

export { NewFooter };
