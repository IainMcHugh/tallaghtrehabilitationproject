import React from 'react';
import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  min-height: 100vh;
`;

const shimmer = keyframes`
    0% {
        opacity: 0.8;
    }
    50% {
        opacity: 0.5
    }
    100% {
        opacity: 0.8;
    }
`;

const Hat = styled.div`
  height: 40px;
  width: 50%;
  background-color: ${({ theme }) => theme.colors.GREY_LIGHT};
  border-radius: ${({ theme }) => theme.borderRadius.all8};
  margin-bottom: ${({ theme }) => theme.spacing.S24};
  animation: ${shimmer} 3s ease infinite;
`;

const Skull = styled.div`
  height: 48px;
  background-color: ${({ theme }) => theme.colors.GREY_LIGHT};
  border-radius: ${({ theme }) => theme.borderRadius.all8};
  margin-bottom: ${({ theme }) => theme.spacing.S24};
  animation: ${shimmer} 3s ease infinite;
`;

const RibCage = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: ${({ theme }) => theme.spacing.S8};
  margin-bottom: ${({ theme }) => theme.spacing.S24};
  animation: ${shimmer} 3s ease infinite;
`;

const Ribs = styled.div`
  height: 24px;
  background-color: ${({ theme }) => theme.colors.GREY_LIGHTER};
  border-radius: ${({ theme }) => theme.borderRadius.all4};
  margin-bottom: ${({ theme }) => theme.spacing.S4};
`;

function Skeleton() {
  return (
    <Wrapper>
      <Hat />
      <Skull />
      <RibCage>
        {[...Array(10)].map((e) => (
          <Ribs key={e} />
        ))}
      </RibCage>
      <Skull />
      <RibCage>
        {[...Array(10)].map((e) => (
          <Ribs key={e} />
        ))}
      </RibCage>
      <Skull />
      <RibCage>
        {[...Array(10)].map((e) => (
          <Ribs key={e} />
        ))}
      </RibCage>
    </Wrapper>
  );
}

export { Skeleton };
