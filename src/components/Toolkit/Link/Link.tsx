import React from 'react';
import type { ReactNode, AnchorHTMLAttributes } from 'react';
import styled from 'styled-components';

export interface ILink extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  className?: string;
}

const Container = styled.a`
  ${({ theme }) => theme.fontSize.F1824}
  font-weight: ${({ theme }) => theme.fontWeight.light};
  border: none;
  color: ${({ theme }) => theme.colors.YELLOW};
  cursor: pointer;
  text-decoration: none;
`;

function Link({ children, className, ...args }: ILink) {
  return (
    <Container className={className} {...args}>
      {children}
    </Container>
  );
}

export { Link };
