import React, { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import { List, Download } from 'react-feather';
import type { Document } from '@prismicio/client/types/documents';

import { breakpoints } from 'styles/breakpoints';
import { usePrismic } from 'services/prismic';
import { Skeleton } from 'components/Toolkit/Skeleton/Skeleton';
import { DefaultLayout } from 'components/Layouts/DefaultLayout/DefaultLayout';
import { Breadcrumbs } from 'components/Toolkit/Breadcrumbs/Breadcrumbs';
import { SectionHeading } from 'components/Toolkit/SectionHeading/SectionHeading';
import { SimpleList } from 'components/Toolkit/SimpleList/SimpleList';
import { NavigatorBlock } from 'components/Toolkit/NavigatorBlock/NavigatorBlock';
import { Button } from 'components/Toolkit/Button/Button';

const DayProgrammeWrapper = styled.div`
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

const SNavigatorBlock = styled(NavigatorBlock)`
  margin: ${({ theme }) => `${theme.spacing.S32} ${theme.spacing.S16}`};

  ${breakpoints.large} {
    margin-bottom: ${({ theme }) => theme.spacing.S48};
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.S16};

  ${breakpoints.large} {
    flex-direction: row;
    padding: ${({ theme }) => `${theme.spacing.S16} ${theme.spacing.S48}`};
  }
`;

const SButton = styled(Button)`
  margin-bottom: ${({ theme }) => theme.spacing.S16};

  ${breakpoints.large} {
    margin-bottom: 0;
    margin-right: ${({ theme }) => theme.spacing.S16};
  }
`;

function DayProgramme() {
  const crumbs = [
    { display: 'Home', href: '/test' },
    { display: 'Day Programme', href: '/dayprogramme' },
  ];
  const [document, setDocument] = useState<Document[] | null>();
  const prismic = usePrismic();

  const ids: string[] = [
    'YND9hRAAACMAXK_o',
    'YNGLUxAAACMAXyGq',
    'YTjyghAAACQAaaF_',
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
      <DayProgrammeWrapper>
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
            <SSectionHeading>Services Available</SSectionHeading>
            <SNavigatorBlock
              links={[
                {
                  href: '/dayprogramme/therapeutic_intervention',
                  displayValue: 'Therapeutic Intervention',
                },
                {
                  href: '/dayprogramme/educational_intervention',
                  displayValue: 'Educational Intervention',
                },
                {
                  href: '/dayprogramme/programme_path',
                  displayValue: 'Programme Path',
                },
                { href: '/dayprogramme/outreach', displayValue: 'Outreach' },
                {
                  href: '/dayprogramme/information_pack',
                  displayValue: 'Information Pack',
                },
              ]}
            />
            <SSectionHeading>What to do next</SSectionHeading>
            <ButtonWrapper>
              <SButton icon={<List />}>Criteria for assessment</SButton>
              <Button variant="SECONDARY" icon={<Download />}>
                Download Referral form
              </Button>
            </ButtonWrapper>
          </>
        ) : (
          <Skeleton />
        )}
      </DayProgrammeWrapper>
    </DefaultLayout>
  );
}

export { DayProgramme };
