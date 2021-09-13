import React from 'react';
import styled from 'styled-components';

import { breakpoints } from 'styles/breakpoints';

type TLinks = { href: string; displayValue: string };
interface INavigatorBlock {
  links: TLinks[];
  className?: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => `${theme.spacing.S8} 0`};
  border-radius: ${({ theme }) => theme.borderRadius.drop4};
  background-color: ${({ theme }) => theme.colors.YELLOW};
  box-shadow: ${({ theme }) => `8px -8px 0 ${theme.colors.YELLOW_DARK}`};
`;

const NavItem = styled.a`
  margin: ${({ theme }) => `0 ${theme.spacing.S16}`};
  padding: ${({ theme }) => `${theme.spacing.S8} 0`};
  ${({ theme }) => theme.fontSize.F1824};
  color: ${({ theme }) => theme.colors.GREY_DARK};
  border-bottom: ${({ theme }) => `2px solid ${theme.colors.YELLOW_LIGHTER}`};
  transition: all 200ms ease-in-out;

  &:hover {
    margin: 0;
    padding: ${({ theme }) => `${theme.spacing.S8} ${theme.spacing.S16}`};
    background-color: ${({ theme }) => theme.colors.YELLOW_LIGHTER};
  }

  ${breakpoints.large} {
    margin: ${({ theme }) => `0 ${theme.spacing.S24}`};
    padding: ${({ theme }) => `${theme.spacing.S12} 0`};

    &:hover {
      margin: 0;
      padding: ${({ theme }) => `${theme.spacing.S12} ${theme.spacing.S24}`};
    }
  }
`;

function NavigatorBlock({ links, className }: INavigatorBlock) {
  return (
    <Wrapper className={className}>
      {links.map(({ href, displayValue }, index) => (
        <NavItem key={index} href={href}>
          {displayValue}
        </NavItem>
      ))}
    </Wrapper>
  );
}

export { NavigatorBlock };
