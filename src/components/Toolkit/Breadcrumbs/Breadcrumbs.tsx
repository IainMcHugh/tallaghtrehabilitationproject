import React from 'react';
import styled, { useTheme } from 'styled-components';
import { ChevronRight } from 'react-feather';

import { Link } from 'components/Toolkit/Link/Link';
import { breakpoints } from 'styles/breakpoints';

type TCrumbs = {
  display: string;
  href: string;
};

export interface IBreadcrumbs {
  crumbs: TCrumbs[];
  className?: string;
}

const Wrapper = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.spacing.S12};
  border-radius: ${({ theme }) => theme.borderRadius.all8};
  background-color: ${({ theme }) => theme.colors.BLUE_LIGHTER};
  box-shadow: ${({ theme }) => theme.shadow.drop};
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  ${breakpoints.large} {
    width: fit-content;
  }
`;

const Crumb = styled.div`
  display: flex;
  align-items: center;
`;

const SLink = styled(Link)`
  white-space: nowrap;
  margin-right: ${({ theme }) => theme.spacing.S8};
  font-weight: bold;

  &:last-child {
    margin-right: 0;
  }
`;

const SChevronRight = styled(ChevronRight)`
  margin-right: ${({ theme }) => theme.spacing.S8};
`;

function Breadcrumbs({ crumbs, className }: IBreadcrumbs) {
  const length = crumbs.length - 1;
  const theme = useTheme();

  return (
    <Wrapper className={className}>
      {crumbs.map(({ display, href }, index) => (
        <Crumb key={index}>
          <SLink href={href} color="GREY_DARK" fontSize="F1216">
            {display}
          </SLink>
          {length !== index && (
            <SChevronRight color={theme.colors.GREY_DARK} size="12" />
          )}
        </Crumb>
      ))}
    </Wrapper>
  );
}

export { Breadcrumbs };
