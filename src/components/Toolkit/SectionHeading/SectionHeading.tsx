import React from 'react';
import type { ReactNode } from 'react';
import styled from 'styled-components';

export interface ISectionHeading {
  children: ReactNode;
  className?: string;
}

const Container = styled.h3`
  ${({ theme }) => theme.fontSize.F2424}
  padding: ${({ theme }) => theme.spacing.S12};
  background-color: ${({ theme }) => theme.colors.YELLOW};
  color: ${({ theme }) => theme.colors.GREY_DARK};
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  border-radius: ${({ theme }) => theme.borderRadius.all8};
  box-shadow: ${({ theme }) => theme.shadow.drop};
`;

function SectionHeading({ children, className }: ISectionHeading) {
  return <Container className={className}>{children}</Container>;
}

export { SectionHeading };
