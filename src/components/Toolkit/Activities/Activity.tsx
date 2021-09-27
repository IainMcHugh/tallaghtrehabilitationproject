import React from 'react';
import styled from 'styled-components';

import type { ThemeTypes } from 'types/Theme.namespace';
import { breakpoints } from 'styles/breakpoints';

interface IActivity {
  day: string;
  heading: string;
  description: string;
  wide: boolean;
  color: ThemeTypes.Colors;
  className?: string;
}

type TWrapper = { color: ThemeTypes.Colors; wide: boolean };
const Wrapper = styled.div<TWrapper>`
  display: grid;
  grid-template-columns: ${({ wide }) => `${wide ? '140px' : '120px'} 1fr`};
  grid-template-rows: 150px;
  justify-content: center;
  align-items: center;
  column-gap: ${({ theme }) => theme.spacing.S8};
  padding: ${({ theme }) => theme.spacing.S4};
  border: ${({ theme }) => `1px dashed ${theme.colors.GREY_DARK}`};
  border-radius: ${({ theme }) => theme.borderRadius.all4};
  box-shadow: ${({ theme }) => theme.shadow.drop};
  background-color: ${({ theme, color }) =>
    /* @ts-ignore */
    theme.colors[`${color}_LIGHT`]};

  ${breakpoints.medium} {
    grid-template-columns: ${({ wide }) => `${wide ? '240px' : '220px'} 1fr`};
    grid-template-rows: 180px;
    column-gap: ${({ theme }) => theme.spacing.S16};
  }

  ${breakpoints.large} {
    grid-template-columns: ${({ wide }) => `${wide ? '300px' : '260px'} 1fr`};
    column-gap: ${({ theme }) => theme.spacing.S24};
  }
`;

type TDayBox = { color: ThemeTypes.Colors };
const DayBox = styled.div<TDayBox>`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({ theme }) => `1px solid ${theme.colors.GREY_DARK}`};
  border-radius: ${({ theme }) => theme.borderRadius.all4};
  background-color: ${({ theme, color }) => theme.colors[color]};
  font-weight: ${({ theme }) => theme.fontWeight.light};

  ${breakpoints.medium} {
    ${({ theme }) => theme.fontSize.F2424};
  }
`;

const InfoWrapper = styled.div``;

const Heading = styled.p`
  ${({ theme }) => theme.fontSize.F1624};
  margin-bottom: ${({ theme }) => theme.spacing.S8};
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  ${breakpoints.medium} {
    ${({ theme }) => theme.fontSize.F1824};
  }
`;

const Description = styled.p`
  ${({ theme }) => theme.fontSize.F1216};

  ${breakpoints.medium} {
    ${({ theme }) => theme.fontSize.F1624};
  }
`;

function Activity({
  day,
  heading,
  description,
  wide,
  color,
  className,
}: IActivity) {
  return (
    <Wrapper className={className} color={color} wide={wide}>
      <DayBox color={color}>{day}</DayBox>
      <InfoWrapper>
        <Heading>{heading}</Heading>
        <Description>{description}</Description>
      </InfoWrapper>
    </Wrapper>
  );
}

export { Activity };
