import React from 'react';
import styled from 'styled-components';

import { breakpoints } from 'styles/breakpoints';
import { Skeleton } from 'components/Toolkit/Skeleton/Skeleton';
import { DefaultLayout } from 'components/Layouts/DefaultLayout/DefaultLayout';
import { Breadcrumbs } from 'components/Toolkit/Breadcrumbs/Breadcrumbs';
import { SectionHeading } from 'components/Toolkit/SectionHeading/SectionHeading';
import { ContactForm } from 'components/Toolkit/ContactForm/ContactForm';

const ContactWrapper = styled.div`
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

function Contact() {
  const crumbs = [
    { display: 'Home', href: '/test' },
    {
      display: 'Contact',
      href: '/contact',
    },
  ];

  return (
    <DefaultLayout>
      <ContactWrapper>
        {document ? (
          <>
            <SBreadcrumbs crumbs={crumbs} />
            <SSectionHeading>Get in touch</SSectionHeading>
            <ContactForm />
          </>
        ) : (
          <Skeleton />
        )}
      </ContactWrapper>
    </DefaultLayout>
  );
}

export { Contact };
