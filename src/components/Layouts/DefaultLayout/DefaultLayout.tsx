import React from 'react';
import type { ReactNode } from 'react';
import styled from 'styled-components';

import { breakpoints } from 'styles/breakpoints';

interface IDefaultLayout {
  children: ReactNode;
}

const Container = styled.div`
  padding: ${({ theme }) => `${theme.spacing.S16} ${theme.spacing.S8}`};

  ${breakpoints.medium} {
    padding: ${({ theme }) => `${theme.spacing.S24} ${theme.spacing.S16}`};
  }

  ${breakpoints.large} {
    margin: 0 auto;
    padding: ${({ theme }) => `${theme.spacing.S24} 0`};
  }
`;

function DefaultLayout({ children }: IDefaultLayout) {
  return <Container>{children}</Container>;
}

export { DefaultLayout };
