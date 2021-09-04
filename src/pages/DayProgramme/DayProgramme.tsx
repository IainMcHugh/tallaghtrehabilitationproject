import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { breakpoints } from 'styles/breakpoints';
import { Skeleton } from 'components/Toolkit/Skeleton/Skeleton';
import { DefaultLayout } from 'components/Layouts/DefaultLayout/DefaultLayout';
import { Breadcrumbs } from 'components/Toolkit/Breadcrumbs/Breadcrumbs';
import { SectionHeading } from 'components/Toolkit/SectionHeading/SectionHeading';

const DayProgrammeWrapper = styled.div`
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
  ${({ theme }) => theme.fontSize.F1216};
  margin-bottom: ${({ theme }) => theme.spacing.S24};
  color: ${({ theme }) => theme.colors.GREY_DARK};

  ${breakpoints.large} {
    ${({ theme }) => theme.fontSize.F1624};
  }
`;

function DayProgramme() {
  const crumbs = [
    { display: 'Home', href: '/' },
    { display: 'Day Programme', href: '/dayprogramme' },
  ];
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <DefaultLayout>
      <DayProgrammeWrapper>
        {loaded ? (
          <>
            <SBreadcrumbs crumbs={crumbs} />
            <SSectionHeading>Summary</SSectionHeading>
            <Paragraph>
              TRP is a dedicated specialist rehabilitation project in the
              Tallaght area providing a community based day-programme for people
              in recovery with addiction problems. The programme is specifically
              designed to provide a safe and confidential environment where
              participants can actively engage in a therapeutic process of
              recovery. The overall objective of the programme is to assist and
              support the rehabilitation and recovery process and realistic
              progression of people who have become stable in treatment on
              prescribed methadone or who have achieved drug free status. Our
              mission statement comes from a community development ethos, which
              believes in the benefits of rehabilitation within a community
              setting and where participants can be supported in their recovery,
              by their own community. TRP contributes to local development
              through providing this necessary service for people with addiction
              problems. TRP is represented on a range of community and voluntary
              organisations/ bodies within the area and is also actively
              involved in promoting and adhering to the National Drugs Strategy:
              Reducing harm, supporting recovery 2017 - 2025, under the umbrella
              of rehabilitation. We are committed to ongoing staff training,
              skills development, education and personal development; we also
              provide training and supervision for students and volunteers. We
              liaise and network with local agencies/organisations who work with
              our target groups and we have a genuine commitment to the
              contribution of positively influencing rehabilitation services in
              the Tallaght area.
            </Paragraph>
            <SectionHeading>Who is it for</SectionHeading>
            <Paragraph>
              As a specialist rehabilitation programme, the primary focus and
              engagement for participants is on the therapeutic process of
              recovery. The programme offers a period of structured development
              work, which is essential to empower and enable participants to
              address addiction, self-esteem, and self-confidence and facilitate
              personal growth and development. The eventual goal for
              participants is successful reintegration into family and community
              and preparation for further education or employment. TRP operates
              a referral system in relation to participant placement involving a
              range of agencies this includes both statutory community and
              voluntary organisation working together for the needs of our
              target group. The programme provides opportunities for clients to
              develop a range of skills, which will assist them in their ongoing
              recovery process from self destructive addictive behaviour. At
              present the TRP programme provides 21 specialist rehabilitation
              places. There are various therapeutic interventions and models of
              therapy provided and delivered by the staff team. These include:
              As a specialist rehabilitation programme, the primary focus and
              engagement for participants is on the therapeutic process of
              recovery. The programme offers a period of structured development
              work, which is essential to empower and enable participants to
              address addiction, self-esteem, and self-confidence and facilitate
              personal growth and development. The eventual goal for
              participants is successful reintegration into family and community
              and preparation for further education or employment. TRP operates
              a referral system in relation to participant placement involving a
              range of agencies this includes both statutory community and
              voluntary organisation working together for the needs of our
              target group. The programme provides opportunities for clients to
              develop a range of skills, which will assist them in their ongoing
              recovery process from self destructive addictive behaviour. At
              present the TRP programme provides 21 specialist rehabilitation
              places. There are various therapeutic interventions and models of
              therapy provided and delivered by the staff team. These include:
            </Paragraph>
            <SectionHeading>Who is it for</SectionHeading>
            <Paragraph>
              As a specialist rehabilitation programme, the primary focus and
              engagement for participants is on the therapeutic process of
              recovery. The programme offers a period of structured development
              work, which is essential to empower and enable participants to
              address addiction, self-esteem, and self-confidence and facilitate
              personal growth and development. The eventual goal for
              participants is successful reintegration into family and community
              and preparation for further education or employment. TRP operates
              a referral system in relation to participant placement involving a
              range of agencies this includes both statutory community and
              voluntary organisation working together for the needs of our
              target group. The programme provides opportunities for clients to
              develop a range of skills, which will assist them in their ongoing
              recovery process from self destructive addictive behaviour. At
              present the TRP programme provides 21 specialist rehabilitation
              places. There are various therapeutic interventions and models of
              therapy provided and delivered by the staff team. These include:
            </Paragraph>
          </>
        ) : (
          <Skeleton />
        )}
      </DayProgrammeWrapper>
    </DefaultLayout>
  );
}

export { DayProgramme };
