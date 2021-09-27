import React from 'react';
import styled from 'styled-components';

export interface ISimpleList {
  items: { text: string }[];
  className?: string;
}

const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: ${({ theme }) => theme.spacing.S4};
  list-style: none;
`;

const ListItem = styled.li`
  padding: ${({ theme }) => `${theme.spacing.S8} ${theme.spacing.S16}`};
  ${({ theme }) => theme.fontSize.F1624}
  background-color: ${({ theme }) => theme.colors.BLUE_LIGHT};
  color: ${({ theme }) => theme.colors.WHITE};
  border-radius: ${({ theme }) => theme.borderRadius.all4};
`;

function SimpleList({ items, className }: ISimpleList) {
  return (
    <Wrapper className={className}>
      {items.map(({ text }, index) => (
        <ListItem key={index}>{text}</ListItem>
      ))}
    </Wrapper>
  );
}

export { SimpleList };
