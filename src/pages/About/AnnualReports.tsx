import React from 'react';
import styled from 'styled-components';

import { breakpoints } from 'styles/breakpoints';
import { DefaultLayout } from 'components/Layouts/DefaultLayout/DefaultLayout';
import { Breadcrumbs } from 'components/Toolkit/Breadcrumbs/Breadcrumbs';
import { SectionHeading } from 'components/Toolkit/SectionHeading/SectionHeading';
import * as reports from 'components/About/reports';

const AnnualReportsWrapper = styled.div`
  min-height: 60vh;
  padding: ${({ theme }) =>
    `${theme.spacing.S8} ${theme.spacing.S8} ${theme.spacing.S48}`};

  ${breakpoints.large} {
    width: 1000px;
    margin: 0 auto;
    padding: ${({ theme }) => `${theme.spacing.S24} 0 ${theme.spacing.S48}`};
  }
`;

const SBreadcrumbs = styled(Breadcrumbs)`
  margin-bottom: ${({ theme }) => theme.spacing.S8};

  ${breakpoints.large} {
    margin-bottom: ${({ theme }) => theme.spacing.S24};
  }
`;

const SSectionHeading = styled(SectionHeading)`
  margin-bottom: ${({ theme }) => theme.spacing.S24};
`;

const LinksWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.S8};
  margin-bottom: ${({ theme }) => theme.spacing.S24};

  ${breakpoints.large} {
    grid-template-columns: 1fr 1fr;
    gap: ${({ theme }) => theme.spacing.S16};
  }
`;

const LinkBlock = styled.div`
  background: ${({ theme }) =>
    `linear-gradient(to top, ${theme.colors.BLUE_DARK}, ${theme.colors.BLUE_LIGHT})`};
  padding: ${({ theme }) => theme.spacing.S16};
  border-radius: ${({ theme }) => theme.borderRadius.all8};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.6;
  transition: opacity 200ms ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  & > a {
    ${({ theme }) => theme.fontSize.F1624};
    color: ${({ theme }) => theme.colors.WHITE};
  }

  ${breakpoints.large} {
    & > a {
      ${({ theme }) => theme.fontSize.F1824};
    }
  }
`;

function AnnualReports() {
  const crumbs = [
    { display: 'Home', href: '/' },
    { display: 'About', href: '/about' },
    {
      display: 'Annual Reports',
      href: '/about/annual_reports',
    },
  ];

  return (
    <DefaultLayout>
      <AnnualReportsWrapper>
        <SBreadcrumbs crumbs={crumbs} />
        <SSectionHeading>Annual Reports</SSectionHeading>
        <LinksWrapper>
          <LinkBlock>
            <a href={reports.ar2020} download>
              TRP Annual Report 2020
            </a>
          </LinkBlock>
          <LinkBlock>
            <a href={reports.ar2019} download>
              TRP Annual Report 2019
            </a>
          </LinkBlock>
          <LinkBlock>
            <a href={reports.ar2018} download>
              TRP Annual Report 2018
            </a>
          </LinkBlock>
          <LinkBlock>
            <a href={reports.ar2017} download>
              TRP Annual Report 2017
            </a>
          </LinkBlock>
          <LinkBlock>
            <a href={reports.ar2015} download>
              TRP Annual Report 2015
            </a>
          </LinkBlock>
          <LinkBlock>
            <a href={reports.ar2014} download>
              TRP Annual Report 2014
            </a>
          </LinkBlock>
          <LinkBlock>
            <a href={reports.ar2013} download>
              TRP Annual Report 2013
            </a>
          </LinkBlock>
          <LinkBlock>
            <a href={reports.ar2012} download>
              TRP Annual Report 2012
            </a>
          </LinkBlock>
          <LinkBlock>
            <a href={reports.ar2011} download>
              TRP Annual Report 2011
            </a>
          </LinkBlock>
          <LinkBlock>
            <a href={reports.ar2010} download>
              TRP Annual Report 2010
            </a>
          </LinkBlock>
          <LinkBlock>
            <a href={reports.ar2009} download>
              TRP Annual Report 2009
            </a>
          </LinkBlock>
          <LinkBlock>
            <a href={reports.ar2008} download>
              TRP Annual Report 2008
            </a>
          </LinkBlock>
          <LinkBlock>
            <a href={reports.ar2007} download>
              TRP Annual Report 2007
            </a>
          </LinkBlock>
        </LinksWrapper>
        <SSectionHeading>Audited Accounts</SSectionHeading>
        <LinksWrapper>
          <LinkBlock>
            <a href={reports.aa2020} download>
              TRP Audited Accounts 2020
            </a>
          </LinkBlock>
          <LinkBlock>
            <a href={reports.aa2019} download>
              TRP Audited Accounts 2019
            </a>
          </LinkBlock>
          <LinkBlock>
            <a href={reports.aa2018} download>
              TRP Audited Accounts 2018
            </a>
          </LinkBlock>
          <LinkBlock>
            <a href={reports.aa2017} download>
              TRP Audited Accounts 2017
            </a>
          </LinkBlock>
          <LinkBlock>
            <a href={reports.aa2016} download>
              TRP Audited Accounts 2016
            </a>
          </LinkBlock>
          <LinkBlock>
            <a href={reports.aa2015} download>
              TRP Audited Accounts 2015
            </a>
          </LinkBlock>
        </LinksWrapper>
      </AnnualReportsWrapper>
    </DefaultLayout>
  );
}

export { AnnualReports };
