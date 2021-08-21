import React from 'react';
import type { ReactNode, ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

type Variant = 'PRIMARY' | 'SECONDARY';
export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon: ReactNode;
  variant?: Variant;
  className?: string;
}

const Container = styled.button<{ variant: Variant }>`
  ${({ theme }) => theme.fontSize.F1824}
  display: grid;
  grid-template-columns: 38px 1fr;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 1px;
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
`;

const IconContainer = styled.span<{ variant: Variant }>`
  height: 38px;
  width: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.WHITE};
  border-radius: ${({ theme }) => theme.borderRadius.drop4};

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
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

function Button({ children, icon, variant = 'PRIMARY', ...args }: IButton) {
  return (
    <Container variant={variant} {...args}>
      <IconContainer variant={variant}>{icon}</IconContainer>
      <TextContainer variant={variant}>{children}</TextContainer>
    </Container>
  );
}

export { Button };
