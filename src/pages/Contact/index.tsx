import React, { useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import emailjs from 'emailjs-com';
import { CreditCard } from 'react-feather';

import { breakpoints } from 'styles/breakpoints';
import { fireToast } from 'utils/toast';
import { DefaultLayout } from 'components/Layouts/DefaultLayout/DefaultLayout';
import { Breadcrumbs } from 'components/Toolkit/Breadcrumbs/Breadcrumbs';
import { SectionHeading } from 'components/Toolkit/SectionHeading/SectionHeading';
import { ContactForm } from 'components/Toolkit/ContactForm/ContactForm';
import { ButtonLink } from 'components/Toolkit/Link/ButtonLink';
import { Map } from 'components/Toolkit/Map/Map';

type TMapSetting = {
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
};
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

const SButtonLink = styled(ButtonLink)`
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
  const mapSettings: TMapSetting = {
    center: {
      lat: 53.275826,
      lng: -6.402779,
    },
    zoom: 17,
  };

  function handleSubmit(values: Record<string, unknown>) {
    emailjs
      .send(
        'service_mqcli2f',
        'template_mysew9h',
        values,
        'user_rgFV9WPXjRWF3bTP31LQN',
      )
      .then(
        () => {
          fireToast({
            text: `Thanks ${values.name}, your message was sent successfully.`,
            variant: 'SUCCESS',
          });
        },
        () => {
          fireToast({
            text: `Oops! There was an error when trying to send your message.`,
            variant: 'ERROR',
          });
        },
      );
    setClearForm(true);
  }

  return (
    <DefaultLayout>
      <Helmet>
        <title>Contact</title>
        <meta
          name="description"
          content="Get in touch with the Tallaght Rehabilitation Project for more information on our services."
        />
      </Helmet>
      <ContactWrapper>
        <SBreadcrumbs crumbs={crumbs} />
        <SSectionHeading>Get in touch</SSectionHeading>
        <SContactForm
          id="contact-form"
          onSubmit={handleSubmit}
          clearForm={clearForm}
          setClearForm={setClearForm}
        />
        <SButtonLink
          icon={<CreditCard />}
          href="/contact/donate"
          isClientLink={true}
        >
          Make a donation
        </SButtonLink>
      </ContactWrapper>
      <Map settings={mapSettings} />
    </DefaultLayout>
  );
}

export { Contact };
