import React from 'react';
import type { ReactNode, ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Container = styled.button`
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
`;

function Button({ children, ...args }: IButton) {
  return <Container {...args}>{children}</Container>;
}

export { Button };
