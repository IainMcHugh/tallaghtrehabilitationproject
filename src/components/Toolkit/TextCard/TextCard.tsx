import React from 'react';
import styled from 'styled-components';

interface ITextCard {
  title: string;
  subtitle: string;
  body: string;
  className?: string;
}

const Wrapper = styled.div`
  padding: ${({ theme }) => `${theme.spacing.S32} ${theme.spacing.S16}`};
  background-color: ${({ theme }) => theme.colors.BLUE_LIGHTER};
  color: ${({ theme }) => theme.colors.BLUE};
  border-radius: ${({ theme }) => theme.borderRadius.drop8};
  margin-bottom: ${({ theme }) => theme.spacing.S24};

  &:last-child {
    margin-bottom: 0;
  }
`;

const TitleText = styled.p`
  ${({ theme }) => theme.fontSize.F2828}
  margin-bottom: ${({ theme }) => theme.spacing.S16};
`;

const SubtitleText = styled.p`
  ${({ theme }) => theme.fontSize.F2424}
  margin-bottom: ${({ theme }) => theme.spacing.S12};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const BodyText = styled.p`
  ${({ theme }) => theme.fontSize.F1824};
  white-space: pre-wrap;
`;

function TextCard({ title, subtitle, body, className }: ITextCard) {
  return (
    <Wrapper className={className}>
      <TitleText>{title}</TitleText>
      <SubtitleText>{subtitle}</SubtitleText>
      <BodyText>{body}</BodyText>
    </Wrapper>
  );
}

export { TextCard };
