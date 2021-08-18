import React from 'react';
import type { ReactNode, AnchorHTMLAttributes } from 'react';
import styled from 'styled-components';

interface IButtonLink extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

const Container = styled.a`
  ${({ theme }) => theme.fontSize.F1824}
  width: 100%;
  height: 40px;
  padding: ${({ theme }) => theme.spacing.S8};
  border: none;
  background-color: ${({ theme }) => theme.colors.YELLOW};
  color: ${({ theme }) => theme.colors.BLUE};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  box-shadow: ${({ theme }) => theme.shadow.drop};
  cursor: pointer;
  text-decoration: none;
`;

function ButtonLink({ children, ...args }: IButtonLink) {
  return <Container {...args}>{children}</Container>;
}

export { ButtonLink };
