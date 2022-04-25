import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import { breakpoints } from 'styles/breakpoints';
import { DefaultLayout } from 'components/Layouts/DefaultLayout/DefaultLayout';
import { Breadcrumbs } from 'components/Toolkit/Breadcrumbs/Breadcrumbs';
import { SectionHeading } from 'components/Toolkit/SectionHeading/SectionHeading';
import { usePrismic } from 'services/prismic';
import { useAuditedAccounts } from 'hooks/useAuditedAccounts';
import { useAnnualReports } from 'hooks/useAnnualReports';

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
    text-transform: capitalize;
  }

  ${breakpoints.large} {
    & > a {
      ${({ theme }) => theme.fontSize.F1824};
    }
  }
`;

function AnnualReports() {
  const prismic = usePrismic();
  const { audits } = useAuditedAccounts(prismic);
  const { reports } = useAnnualReports(prismic);

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
      <Helmet>
        <title>Annual Reports</title>
        <meta
          name="description"
          content="The annual reports for Tallaght Rehabilitation Project."
        />
      </Helmet>
      <AnnualReportsWrapper>
        <SBreadcrumbs crumbs={crumbs} />
        <SSectionHeading>Annual Reports</SSectionHeading>
        {reports && (
          <LinksWrapper>
            {reports.reverse().map((report, index) => (
              <LinkBlock key={index}>
                <a href={report.url} download>
                  {report.name}
                </a>
              </LinkBlock>
            ))}
          </LinksWrapper>
        )}
        <SSectionHeading>Audited Accounts</SSectionHeading>
        {audits && (
          <LinksWrapper>
            {audits.reverse().map((audit, index) => (
              <LinkBlock key={index}>
                <a href={audit.url} download>
                  {audit.name}
                </a>
              </LinkBlock>
            ))}
          </LinksWrapper>
        )}
      </AnnualReportsWrapper>
    </DefaultLayout>
  );
}

export { AnnualReports };
