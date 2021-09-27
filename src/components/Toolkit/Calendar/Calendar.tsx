import React from 'react';
import styled from 'styled-components';

interface ICalendar {
  days: string[];
  times: string[];
  className?: string;
}

const Wrapper = styled.div``;

const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.S8};
  padding: ${({ theme }) => theme.spacing.S24};
  border-radius: ${({ theme }) => theme.borderRadius.drop8};
  background-color: ${({ theme }) => theme.colors.RED};
  box-shadow: ${({ theme }) => theme.shadow.drop};
`;

const HeaderText = styled.p`
  ${({ theme }) => theme.fontSize.F2424};
  color: ${({ theme }) => theme.colors.WHITE};
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing.S48} ${theme.spacing.S24}`};
  border: ${({ theme }) => `1px solid ${theme.colors.GREY_LIGHT}`};
  border-radius: ${({ theme }) => theme.borderRadius.drop8};
  background-color: ${({ theme }) => theme.colors.WHITE};
  box-shadow: ${({ theme }) => theme.shadow.drop};
`;

const BodyText = styled.p`
  ${({ theme }) => theme.fontSize.F2424};
  color: ${({ theme }) => theme.colors.GREY_DARK};
  margin-bottom: ${({ theme }) => theme.spacing.S16};

  &:last-child {
    margin-bottom: 0;
  }
`;

function Calendar({ days, times, className }: ICalendar) {
  return (
    <Wrapper className={className}>
      <Header>
        {days.map((day, index) => (
          <HeaderText key={index}>{day}</HeaderText>
        ))}
      </Header>
      <Body>
        {times.map((time, index) => (
          <BodyText key={index}>{time}</BodyText>
        ))}
      </Body>
    </Wrapper>
  );
}

export { Calendar };
