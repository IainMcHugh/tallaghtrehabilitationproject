import React, { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import { Download } from 'react-feather';
import type { Document } from '@prismicio/client/types/documents';

import ACReferralForm from 'documents/referral_forms/Aftercare_referral_form.pdf';
import { breakpoints } from 'styles/breakpoints';
import { usePrismic } from 'services/prismic';
import { Skeleton } from 'components/Toolkit/Skeleton/Skeleton';
import { DefaultLayout } from 'components/Layouts/DefaultLayout/DefaultLayout';
import { Breadcrumbs } from 'components/Toolkit/Breadcrumbs/Breadcrumbs';
import { SectionHeading } from 'components/Toolkit/SectionHeading/SectionHeading';
import { SectionSubHeading } from 'components/Toolkit/SectionSubHeading/SectionSubHeading';
import { SimpleList } from 'components/Toolkit/SimpleList/SimpleList';
import { Activities } from 'components/Toolkit/Activities/Activities';
import { ButtonLink } from 'components/Toolkit/Link/ButtonLink';

const AftercareWrapper = styled.div`
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

const SSectionSubHeading = styled(SectionSubHeading)`
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

const ActivitiesWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.S24};

  ${breakpoints.large} {
    padding: ${({ theme }) => `0 ${theme.spacing.S48}`};
  }
`;

const ButtonWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.S16};

  ${breakpoints.large} {
    padding: ${({ theme }) => `${theme.spacing.S16} ${theme.spacing.S48}`};
  }
`;

function Aftercare() {
  const crumbs = [
    { display: 'Home', href: '/' },
    { display: 'Aftercare', href: '/aftercare' },
  ];
  const [document, setDocument] = useState<Document[] | null>();
  const prismic = usePrismic();

  const ids: string[] = [
    'YNGRyhAAACMAXz5e',
    'YNGTOhAAACQAX0S8',
    'YUjjZBEAACEArHEy',
    'YUjqLREAACEArI-u',
    'YNGUCxAAACIAX0hl',
    'YUjk8hEAACEArHgq',
  ];

  useEffect(() => {
    const fetchData = async () => {
      const { results } = await prismic.getByIDs(ids, {});
      console.log(results);
      setDocument(results);
    };

    fetchData();
  }, []);

  return (
    <DefaultLayout>
      <AftercareWrapper>
        {document ? (
          <>
            <SBreadcrumbs crumbs={crumbs} />
            {document.map(({ data }, index) => (
              <Fragment key={index}>
                {data.title && (
                  <>
                    <SSectionHeading>{data.title[0].text}</SSectionHeading>
                    {data.subtitle.length !== 0 && (
                      <SSectionSubHeading>
                        {data.subtitle[0].text}
                      </SSectionSubHeading>
                    )}
                    <Paragraph>{data.paragraph[0].text}</Paragraph>
                  </>
                )}
                {data.list && index !== 3 && <SSimpleList items={data.list} />}
                {index === 3 && (
                  <>
                    <SSectionHeading>Activities</SSectionHeading>
                    <ActivitiesWrapper>
                      <Activities
                        activies={data.list.map(
                          ({ text }: { text: string }) => {
                            const [day, heading, description] = text.split(':');
                            return { day, heading, description };
                          },
                        )}
                      />
                    </ActivitiesWrapper>
                  </>
                )}
              </Fragment>
            ))}
            <ButtonWrapper>
              <ButtonLink icon={<Download />} href={ACReferralForm} download>
                Download Referral form
              </ButtonLink>
            </ButtonWrapper>
          </>
        ) : (
          <Skeleton />
        )}
      </AftercareWrapper>
    </DefaultLayout>
  );
}

export { Aftercare };
