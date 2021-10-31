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
import { SectionSubHeading } from 'components/Toolkit/SectionSubHeading/SectionSubHeading';
import { SimpleList } from 'components/Toolkit/SimpleList/SimpleList';

const DonateWrapper = styled.div`
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

function Donate() {
  const crumbs = [
    { display: 'Home', href: '/' },
    { display: 'Contact', href: '/contact' },
    {
      display: 'Donate',
      href: '/contact/donate',
    },
  ];
  const [document, setDocument] = useState<Document[] | null>();
  const prismic = usePrismic();

  const ids: string[] = ['YNGVwxAAACQAX1AN'];

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
        <title>Donate</title>
        <meta
          name="description"
          content="Would you consider making a donation today? Your contribution will be acknowledged on our website and on our annual report and on social media if you so wish."
        />
      </Helmet>
      <DonateWrapper>
        {document ? (
          <>
            <SBreadcrumbs crumbs={crumbs} />
            {document.map(({ data }, index) => (
              <Fragment key={index}>
                {data.title && (
                  <>
                    <SSectionHeading>{data.title[0].text}</SSectionHeading>
                    <SSectionSubHeading>
                      {data.subtitle[0].text}
                    </SSectionSubHeading>
                    {data.paragraph.map((para: any, index: number) => (
                      <Paragraph key={index}>{para.text}</Paragraph>
                    ))}
                  </>
                )}
                {data.list && <SSimpleList items={data.list} />}
              </Fragment>
            ))}
          </>
        ) : (
          <Skeleton />
        )}
      </DonateWrapper>
    </DefaultLayout>
  );
}

export { Donate };
