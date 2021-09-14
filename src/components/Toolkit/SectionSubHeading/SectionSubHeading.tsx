import React from 'react';
import type { ReactNode } from 'react';
import styled from 'styled-components';

interface ISectionSubHeading {
  children: ReactNode;
  className?: string;
}

const Wrapper = styled.div`
  background-color: ${({ theme }) => `${theme.colors.YELLOW_LIGHTER}44`};
  padding: ${({ theme }) => theme.spacing.S24};
  border-radius: ${({ theme }) => theme.borderRadius.drop8};
  color: ${({ theme }) => `${theme.colors.BLUE_DARK}BB`};
  ${({ theme }) => theme.fontSize.F1824};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-style: italic;
`;

function SectionSubHeading({ children, className }: ISectionSubHeading) {
  return <Wrapper className={className}>{children}</Wrapper>;
}

export { SectionSubHeading };
