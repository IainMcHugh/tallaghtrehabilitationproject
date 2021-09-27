import React, { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import type { Document } from '@prismicio/client/types/documents';

import { breakpoints } from 'styles/breakpoints';
import { usePrismic } from 'services/prismic';
import { Skeleton } from 'components/Toolkit/Skeleton/Skeleton';
import { DefaultLayout } from 'components/Layouts/DefaultLayout/DefaultLayout';
import { Breadcrumbs } from 'components/Toolkit/Breadcrumbs/Breadcrumbs';
import { SectionHeading } from 'components/Toolkit/SectionHeading/SectionHeading';
import { TextCard } from 'components/Toolkit/TextCard/TextCard';

type TGroupValue = {
  spans: [];
  text: string;
  type: string;
};

type TGroup = {
  title: TGroupValue[];
  subtitle: TGroupValue[];
  body: TGroupValue[];
};

const ProgrammePathWrapper = styled.div`
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

const ProgrammePathBlock = styled.div`
  background-color: ${({ theme }) => theme.colors.BLUE_LIGHT};
  padding: ${({ theme }) => `${theme.spacing.S24} ${theme.spacing.S24}`};
  border-radius: ${({ theme }) => theme.borderRadius.drop8};
`;

function ProgrammePath() {
  const crumbs = [
    { display: 'Home', href: '/' },
    { display: 'Day Programme', href: '/dayprogramme' },
    {
      display: 'Programme Path',
      href: '/dayprogramme/programme_path',
    },
  ];
  const [document, setDocument] = useState<Document[] | null>();
  const prismic = usePrismic();

  const ids: string[] = ['YUOydREAACUAytpM', 'YUOzixEAACMAyt84'];

  useEffect(() => {
    const fetchData = async () => {
      const { results } = await prismic.getByIDs(ids, {});
      setDocument(results);
    };

    fetchData();
  }, []);

  return (
    <DefaultLayout>
      <ProgrammePathWrapper>
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
                {data.group && (
                  <ProgrammePathBlock>
                    {(data.group as TGroup[]).map((groupData, index) => (
                      <TextCard
                        key={index}
                        title={groupData.title[0].text}
                        subtitle={groupData.subtitle[0].text}
                        body={groupData.body[0].text}
                      />
                    ))}
                  </ProgrammePathBlock>
                )}
              </Fragment>
            ))}
          </>
        ) : (
          <Skeleton />
        )}
      </ProgrammePathWrapper>
    </DefaultLayout>
  );
}

export { ProgrammePath };
