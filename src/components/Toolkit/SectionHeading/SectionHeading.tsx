import React from 'react';
import type { ReactNode } from 'react';
import styled from 'styled-components';

interface ISectionHeading {
  children: ReactNode;
}

const Container = styled.h3`
  ${({ theme }) => theme.fontSize.F1824}
  padding: ${({ theme }) => `${theme.spacing.S4} ${theme.spacing.S24}`};
  border-left: ${({ theme }) => `12px solid ${theme.colors.BLUE}`};
  background-color: ${({ theme }) => theme.colors.YELLOW};
  color: ${({ theme }) => theme.colors.BLUE};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-transform: uppercase;
  border-radius: ${({ theme }) =>
    `0 ${theme.borderRadius.default} ${theme.borderRadius.default} 0`};
`;

function SectionHeading({ children }: ISectionHeading) {
  return <Container>{children}</Container>;
}

export { SectionHeading };
