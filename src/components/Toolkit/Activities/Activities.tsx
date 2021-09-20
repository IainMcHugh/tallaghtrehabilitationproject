import React from 'react';
import styled from 'styled-components';

import { Activity } from 'components/Toolkit/Activities/Activity';
import { ThemeTypes } from 'types/Theme.namespace';
import { breakpoints } from 'styles/breakpoints';

type TActivity = {
  day: string;
  heading: string;
  description: string;
};

interface IActivities {
  activies: TActivity[];
}

const SActivity = styled(Activity)`
  margin-bottom: ${({ theme }) => theme.spacing.S8};

  &:last-child {
    margin-bottom: 0;
  }

  ${breakpoints.large} {
    margin-bottom: ${({ theme }) => theme.spacing.S16};

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

function Activities({ activies }: IActivities) {
  const colorSelector = (index: number): ThemeTypes.Colors => {
    switch (index) {
      case 0:
        return 'PINK';
      case 1:
        return 'GREEN';
      case 2:
        return 'PURPLE';
      case 3:
        return 'RED';
      case 4:
        return 'TURQUOISE';
      default:
        return 'GREY';
    }
  };
  return (
    <>
      {activies.map((props, index) => (
        <SActivity
          {...props}
          key={index}
          wide={index % 2 === 0}
          color={colorSelector(index)}
        />
      ))}
    </>
  );
}

export { Activities };
