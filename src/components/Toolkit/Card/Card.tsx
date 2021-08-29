import React from 'react';
import styled from 'styled-components';
import { breakpoints } from 'styles/breakpoints';

export interface ICard {
  imageUrl: string;
  imageAlt?: string;
  heading: string;
  subheading: string;
  className?: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: ${({ theme }) => theme.spacing.S24};
  border-radius: ${({ theme }) => theme.borderRadius.all8};
  box-shadow: ${({ theme }) => theme.shadow.drop};
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.all8};
  box-shadow: ${({ theme }) => theme.shadow.drop};
  margin-bottom: ${({ theme }) => theme.spacing.S12};

  ${breakpoints.large} {
    height: 80%;
    width: auto;
  }
`;

const Data = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.p`
  ${({ theme }) => theme.fontSize.F1824};
  color: ${({ theme }) => theme.colors.GREY_DARK};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  margin-bottom: ${({ theme }) => theme.spacing.S8};
`;

const SubHeading = styled.p`
  ${({ theme }) => theme.fontSize.F1216};
  color: ${({ theme }) => theme.colors.GREY_DARK};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

function Card({
  imageUrl,
  imageAlt = '',
  heading,
  subheading,
  className,
}: ICard) {
  return (
    <Container className={className}>
      <Image src={imageUrl} alt={imageAlt} />
      <Data>
        <Heading>{heading}</Heading>
        <SubHeading>{subheading}</SubHeading>
      </Data>
    </Container>
  );
}

export { Card };
