import React from 'react';
import type { ReactNode, AnchorHTMLAttributes } from 'react';
import styled from 'styled-components';

import { ThemeTypes } from 'types/Theme.namespace';

type Variant = 'DEFAULT' | 'THICK';
export interface ILink extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: Variant;
  color?: ThemeTypes.Colors;
  fontSize?: ThemeTypes.FontSize;
  className?: string;
}

const Container = styled.a<{
  variant: Variant;
  color?: ThemeTypes.Colors;
  fontSize?: ThemeTypes.FontSize;
}>`
  ${({ theme, fontSize }) =>
    fontSize ? theme.fontSize[fontSize] : theme.fontSize.F1824}
  font-weight: ${({ theme, variant }) => {
    switch (variant) {
      case 'DEFAULT':
        return theme.fontWeight.light;
      case 'THICK':
        return theme.fontWeight.medium;
    }
  }};
  border: none;
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.YELLOW};
  cursor: pointer;
  text-decoration: none;
`;

function Link({
  children,
  variant = 'DEFAULT',
  color,
  fontSize,
  className,
  ...args
}: ILink) {
  return (
    <Container
      className={className}
      variant={variant}
      color={color}
      fontSize={fontSize}
      {...args}
    >
      {children}
    </Container>
  );
}

export { Link };
