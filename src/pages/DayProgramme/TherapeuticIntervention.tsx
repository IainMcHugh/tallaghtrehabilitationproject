import React, { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import type { Document } from '@prismicio/client/types/documents';

import { breakpoints } from 'styles/breakpoints';
import { usePrismic } from 'services/prismic';
import { Skeleton } from 'components/Toolkit/Skeleton/Skeleton';
import { DefaultLayout } from 'components/Layouts/DefaultLayout/DefaultLayout';
import { Breadcrumbs } from 'components/Toolkit/Breadcrumbs/Breadcrumbs';
import { SectionHeading } from 'components/Toolkit/SectionHeading/SectionHeading';
import { SimpleList } from 'components/Toolkit/SimpleList/SimpleList';
import { Calendar } from 'components/Toolkit/Calendar/Calendar';

const TherapeuticInterventionWrapper = styled.div`
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

const Paragraph = styled.p`
  ${({ theme }) => theme.fontSize.F1624};
  padding: ${({ theme }) => `0 ${theme.spacing.S8}`};
  margin-bottom: ${({ theme }) => theme.spacing.S24};
  color: ${({ theme }) => theme.colors.GREY_DARK};
  white-space: pre-wrap;

  ${breakpoints.large} {
    ${({ theme }) => theme.fontSize.F1624};
  }
`;

const SSimpleList = styled(SimpleList)`
  margin-bottom: ${({ theme }) => theme.spacing.S24};

  ${breakpoints.large} {
    margin-bottom: ${({ theme }) => theme.spacing.S48};
  }
`;

function TherapeuticIntervention() {
  const crumbs = [
    { display: 'Home', href: '/' },
    { display: 'Day Programme', href: '/dayprogramme' },
    {
      display: 'Therapeutic Intervention',
      href: '/dayprogramme/therapeutic_intervention',
    },
  ];
  const [document, setDocument] = useState<Document[] | null>();
  const prismic = usePrismic();

  const ids: string[] = [
    'YNGLshAAACEAXyNQ',
    'YNGMEBAAACEAXyT0',
    'YNGMQBAAACMAXyXX',
    'YT_AwBAAACQA5MbM',
    'YNGMeBAAACQAXybO',
  ];

  useEffect(() => {
    const fetchData = async () => {
      const { results } = await prismic.getByIDs(ids, {});
      setDocument(results);
    };

    fetchData();
  }, []);

  return (
    <DefaultLayout>
      <Helmet>
        <title>Therapeutic Intervention</title>
        <meta
          name="description"
          content="The Therapeutic component of the programme, forms the core around which all other sessions are interwoven."
        />
      </Helmet>
      <TherapeuticInterventionWrapper>
        {document ? (
          <>
            <SBreadcrumbs crumbs={crumbs} />
            {document.map(({ data }, index) => (
              <Fragment key={index}>
                {data.title && (
                  <>
                    <SSectionHeading>{data.title[0].text}</SSectionHeading>
                    <Paragraph>{data.paragraph[0].text}</Paragraph>
                  </>
                )}
                {data.list && <SSimpleList items={data.list} />}
              </Fragment>
            ))}
            <Calendar
              days={['Monday', 'Wednesday', 'Friday']}
              times={['11:00am - 12:30pm', '12:45pm - 2:00pm']}
            />
          </>
        ) : (
          <Skeleton />
        )}
      </TherapeuticInterventionWrapper>
    </DefaultLayout>
  );
}

export { TherapeuticIntervention };
