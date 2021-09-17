import React from 'react';
import type { ReactNode, AnchorHTMLAttributes } from 'react';
import styled from 'styled-components';

type Variant = 'PRIMARY' | 'SECONDARY';
export interface IButtonLink extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  icon: ReactNode;
  external?: boolean;
  variant?: Variant;
  className?: string;
}

const Container = styled.a<{ variant: Variant }>`
  ${({ theme }) => theme.fontSize.F1824}
  display: grid;
  grid-template-columns: 38px 1fr;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  border: none;
  background-color: ${({ theme, variant }) => {
    switch (variant) {
      case 'PRIMARY':
        return theme.colors.YELLOW;
      case 'SECONDARY':
        return theme.colors.BLUE_LIGHT;
    }
  }};
  border-radius: ${({ theme }) => theme.borderRadius.drop4};
  box-shadow: ${({ theme }) => theme.shadow.drop};
  cursor: pointer;

  ${({ theme, variant }) =>
    variant === 'SECONDARY' &&
    `border: 1px solid ${theme.colors.YELLOW}; height: 38px;`}
`;

const IconContainer = styled.span<{ variant: Variant }>`
  height: 38px;
  width: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => `${theme.colors.WHITE}66`};
  border-radius: ${({ theme }) => theme.borderRadius.drop4};

  ${({ variant }) => variant === 'PRIMARY' && `margin-left: 1px;`}

  & > svg {
    color: ${({ theme, variant }) => {
      switch (variant) {
        case 'PRIMARY':
          return theme.colors.BLUE_LIGHT;
        case 'SECONDARY':
          return theme.colors.YELLOW;
      }
    }};
  }
`;

const TextContainer = styled.p<{ variant: Variant }>`
  ${({ theme }) => theme.fontSize.F1824};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme, variant }) => {
    switch (variant) {
      case 'PRIMARY':
        return theme.colors.BLUE_LIGHT;
      case 'SECONDARY':
        return theme.colors.YELLOW;
    }
  }};
`;

function ButtonLink({
  children,
  icon,
  external = false,
  variant = 'PRIMARY',
  ...args
}: IButtonLink) {
  return (
    <Container
      variant={variant}
      {...args}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      <IconContainer variant={variant}>{icon}</IconContainer>
      <TextContainer variant={variant}>{children}</TextContainer>
    </Container>
  );
}

export { ButtonLink };
