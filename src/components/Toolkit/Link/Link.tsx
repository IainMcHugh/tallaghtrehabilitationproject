import React from 'react';
import type { ReactNode, AnchorHTMLAttributes } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';
import styled from 'styled-components';

import { ThemeTypes } from 'types/Theme.namespace';

type Variant = 'DEFAULT' | 'THICK';
// export interface ILink extends AnchorHTMLAttributes<HTMLAnchorElement> {
export interface ILink extends Omit<LinkProps, 'to'> {
  children: ReactNode;
  href: string;
  variant?: Variant;
  color?: ThemeTypes.Colors;
  fontSize?: ThemeTypes.FontSize;
  isClientLink?: boolean;
  className?: string;
}

type TLinkWrapper = {
  variant: Variant;
  color?: ThemeTypes.Colors;
  fontSize?: ThemeTypes.FontSize;
};
const ReactLinkWrapper = styled(ReactLink)<TLinkWrapper>`
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

const LinkWrapper = styled.a<TLinkWrapper>`
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
  href,
  variant = 'DEFAULT',
  color,
  fontSize,
  isClientLink = true,
  className,
  ...args
}: ILink) {
  return (
    <>
      {isClientLink ? (
        <ReactLinkWrapper
          className={className}
          variant={variant}
          color={color}
          fontSize={fontSize}
          to={href}
          {...args}
        >
          {children}
        </ReactLinkWrapper>
      ) : (
        <LinkWrapper
          className={className}
          variant={variant}
          color={color}
          fontSize={fontSize}
          href={href}
          {...args}
        >
          {children}
        </LinkWrapper>
      )}
    </>
  );
}

export { Link };
