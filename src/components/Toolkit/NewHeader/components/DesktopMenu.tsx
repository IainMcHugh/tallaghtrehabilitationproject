import React from 'react';
import styled from 'styled-components';

import { Link } from 'components/Toolkit/Link/Link';

type TMenuItem = {
  displayText: string;
  href: string;
  external?: boolean;
  download?: boolean;
};
interface IDesktopMenu {
  items: TMenuItem[];
  className?: string;
}

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.BLUE_LIGHT};
  border-radius: ${({ theme }) => theme.borderRadius.drop8};
  padding: ${({ theme }) => `${theme.spacing.S16} 0`};
  width: 244px;
`;

const ListItem = styled.div`
  padding: ${({ theme }) => `${theme.spacing.S16} ${theme.spacing.S16}`};
  &:hover {
    background-color: ${({ theme }) => theme.colors.BLUE_DARK};
  }
`;

const SLink = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.fontSize.F1616}
`;

const ALink = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.fontSize.F1616}
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.colors.YELLOW};
`;

function DesktopMenu({ items, className }: IDesktopMenu) {
  return (
    <Container className={className}>
      {items.map(({ displayText, href, external, download }, index) => (
        <ListItem key={index}>
          {external ? (
            <ALink
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              download={download}
            >
              {displayText}
            </ALink>
          ) : (
            <SLink href={href} download={download}>
              {displayText}
            </SLink>
          )}
        </ListItem>
      ))}
    </Container>
  );
}

export { DesktopMenu };
