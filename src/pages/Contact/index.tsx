import React, { useState } from 'react';
import styled from 'styled-components';
import { CreditCard } from 'react-feather';

import { breakpoints } from 'styles/breakpoints';
import { DefaultLayout } from 'components/Layouts/DefaultLayout/DefaultLayout';
import { Breadcrumbs } from 'components/Toolkit/Breadcrumbs/Breadcrumbs';
import { SectionHeading } from 'components/Toolkit/SectionHeading/SectionHeading';
import { ContactForm } from 'components/Toolkit/ContactForm/ContactForm';
import { Button } from 'components/Toolkit/Button/Button';

interface TSubmission {
  name: string;
  email: string;
  message: string;
}

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

const SContactForm = styled(ContactForm)`
  margin-bottom: 48px;
`;

const SButton = styled(Button)`
  max-width: 600px;
  margin: 0 auto;
`;

function Contact() {
  const [clearForm, setClearForm] = useState<boolean>(false);
  const crumbs = [
    { display: 'Home', href: '/' },
    {
      display: 'Contact',
      href: '/contact',
    },
  ];

  function handleSubmit(values: TSubmission) {
    console.log(values);
    setClearForm(true);
  }

  return (
    <DefaultLayout>
      <ContactWrapper>
        <SBreadcrumbs crumbs={crumbs} />
        <SSectionHeading>Get in touch</SSectionHeading>
        <SContactForm
          id="contact-form"
          onSubmit={handleSubmit}
          clearForm={clearForm}
          setClearForm={setClearForm}
        />
        <SButton icon={<CreditCard />}>Make a donation</SButton>
      </ContactWrapper>
    </DefaultLayout>
  );
}

export { Contact };
