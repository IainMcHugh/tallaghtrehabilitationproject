import React from 'react';
import type { ReactNode, AnchorHTMLAttributes } from 'react';
import styled from 'styled-components';

type Variant = 'DEFAULT' | 'THICK';
export interface ILink extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

const Container = styled.a<{ variant: Variant }>`
  ${({ theme }) => theme.fontSize.F1824}
  font-weight: ${({ theme, variant }) => {
    switch (variant) {
      case 'DEFAULT':
        return theme.fontWeight.light;
      case 'THICK':
        return theme.fontWeight.medium;
    }
  }};
  border: none;
  color: ${({ theme }) => theme.colors.YELLOW};
  cursor: pointer;
  text-decoration: none;
`;

function Link({ children, variant = 'DEFAULT', className, ...args }: ILink) {
  return (
    <Container className={className} variant={variant} {...args}>
      {children}
    </Container>
  );
}

export { Link };
