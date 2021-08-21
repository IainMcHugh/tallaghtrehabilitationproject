import React from 'react';
import styled from 'styled-components';

type TMenuItem = { displayText: string; href: string };
interface IDesktopMenu {
  items: TMenuItem[];
  className?: string;
}

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.BLUE_LIGHT};
  border-radius: ${({ theme }) => theme.borderRadius.drop8};
  height: 134px;
  width: 214px;
`;

function DesktopMenu({ items, className }: IDesktopMenu) {
  return <Container className={className}></Container>;
}

export { DesktopMenu };
