import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { ChevronLeft, ChevronRight } from 'react-feather';

interface IBooklet {
  bookletLength: number;
  className?: string;
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${({ theme }) =>
    `${theme.spacing.S48} auto ${theme.spacing.S48}`};
  column-gap: ${({ theme }) => theme.spacing.S24};
  justify-content: center;
  justify-items: center;
  align-items: center;
`;

type TChevronButton = { hide: boolean };
const ChevronButton = styled.button<TChevronButton>`
  border: none;
  ${({ hide }) => hide && 'visibility: hidden;'}
  transition: transform 200ms ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const BookletPage = styled.img`
  max-width: 600px;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadow.drop};
`;

function Booklet({ bookletLength, className }: IBooklet) {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const theme = useTheme();
  return (
    <Wrapper className={className}>
      <ChevronButton
        onClick={() => setCurrentPage(currentPage - 1)}
        hide={currentPage === 0}
      >
        <ChevronLeft width={48} height={48} color={theme.colors.GREY_DARK} />
      </ChevronButton>
      <BookletPage
        src={require(`images/room_rental_booklet/room_rental_booklet-${
          currentPage + 1
        }.jpg`)}
        alt={`Room rental page ${currentPage + 1}`}
      />
      <ChevronButton
        onClick={() => setCurrentPage(currentPage + 1)}
        hide={currentPage === bookletLength - 1}
      >
        <ChevronRight width={48} height={48} color={theme.colors.GREY_DARK} />
      </ChevronButton>
    </Wrapper>
  );
}

export { Booklet };
