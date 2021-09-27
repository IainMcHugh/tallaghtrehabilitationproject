import React, { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import type { Document } from '@prismicio/client/types/documents';

import { breakpoints } from 'styles/breakpoints';
import { usePrismic } from 'services/prismic';
import { Skeleton } from 'components/Toolkit/Skeleton/Skeleton';
import { DefaultLayout } from 'components/Layouts/DefaultLayout/DefaultLayout';
import { Breadcrumbs } from 'components/Toolkit/Breadcrumbs/Breadcrumbs';
import { SectionHeading } from 'components/Toolkit/SectionHeading/SectionHeading';
import { SimpleList } from 'components/Toolkit/SimpleList/SimpleList';
import { NavigatorBlock } from 'components/Toolkit/NavigatorBlock/NavigatorBlock';

const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 768px) {
    height: 400px;
  }

  @media only screen and (min-width: 1200px) {
    height: 500px;
  }
`;

const BannerImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  background-position: center;
  filter: brightness(1.2);
  opacity: 0.8;
`;

const AboutWrapper = styled.div`
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

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  height: auto;
  width: 100%;
`;

const SNavigatorBlock = styled(NavigatorBlock)`
  margin: ${({ theme }) => `${theme.spacing.S32} ${theme.spacing.S16}`};

  ${breakpoints.large} {
    margin-bottom: ${({ theme }) => theme.spacing.S48};
  }
`;

function About() {
  const crumbs = [
    { display: 'Home', href: '/' },
    { display: 'About', href: '/about' },
  ];
  const [document, setDocument] = useState<Document[] | null>();
  const prismic = usePrismic();

  const ids: string[] = ['YND1_BAAACQAXI4z', 'YND2qBAAACIAXJE1'];

  useEffect(() => {
    const fetchData = async () => {
      const { results } = await prismic.getByIDs(ids, {});
      setDocument(results);
    };

    fetchData();
  }, []);

  return (
    <DefaultLayout>
      <BannerContainer>
        <BannerImage
          src={require('../../images/Team/group2.jpg')}
          alt="Team photo"
        />
      </BannerContainer>
      <AboutWrapper>
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
            <SSectionHeading>Meet the Team</SSectionHeading>
            <ImageContainer>
              <Image
                src={require('../../images/Team/group1.png')}
                alt="Team photo"
              />
            </ImageContainer>
            <SSectionHeading>For more information</SSectionHeading>
            <SNavigatorBlock
              links={[
                {
                  href: '/tallaghtrehabilitationproject/about/board_of_management',
                  displayValue: 'Board of Management',
                },
                {
                  href: '/tallaghtrehabilitationproject/about/student_placement',
                  displayValue: 'Student Placement',
                },
                {
                  href: '/tallaghtrehabilitationproject/about/annual_reports',
                  displayValue: 'Annual Reports',
                },
              ]}
            />
          </>
        ) : (
          <Skeleton />
        )}
      </AboutWrapper>
    </DefaultLayout>
  );
}

export { About };
