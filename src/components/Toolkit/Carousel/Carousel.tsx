import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

type TCarouselData = { title: string; body: string };
export interface ICarousel {
  items: TCarouselData[];
  width: number;
  speed: number;
  className?: string;
}

const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div<{ width: number }>`
  width: ${({ width }) => `${width}px`};
  overflow-x: scroll;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Container = styled.div<{
  count: number;
  carouselGap: number;
  width: number;
}>`
  display: grid;
  grid-template-columns: ${({ count, width }) =>
    `repeat(${count}, ${width}px)`};
  column-gap: ${({ carouselGap }) => `${carouselGap}px`};
`;

const CarouselItem = styled.div``;

const HeadingContainer = styled.div`
  ${({ theme }) => theme.fontSize.F2424};
  background-color: ${({ theme }) => `${theme.colors.YELLOW}BF`};
  padding: ${({ theme }) => theme.spacing.S12};
  border-radius: ${({ theme }) => theme.borderRadius.all8};
  color: ${({ theme }) => theme.colors.GREY_DARK};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.S16};
  box-shadow: ${({ theme }) => theme.shadow.drop};
`;

const BodyContainer = styled.div`
  ${({ theme }) => theme.fontSize.F1216};
  background-color: ${({ theme }) => `${theme.colors.YELLOW}BF`};
  padding: ${({ theme }) => theme.spacing.S12};
  border-radius: ${({ theme }) => theme.borderRadius.all8};
  color: ${({ theme }) => theme.colors.GREY_DARK};
  box-shadow: ${({ theme }) => theme.shadow.drop};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.S12};
`;

const ButtonContainer = styled.div<{ width: number }>`
  width: ${({ width }) => `${width}px`};
`;

const ButtonWrapper = styled.div`
  width: 100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Circle = styled.div<{ active: boolean }>`
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.YELLOW : `${theme.colors.YELLOW_LIGHTER}BF`};
  cursor: pointer;
`;

function Carousel({ items, width, speed, className }: ICarousel) {
  const count = items.length;
  const carouselGap = 8;
  const scrollPositions: number[] = [];
  const carouselRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number>(0);

  // initialise array with each starting posiition
  for (let i = 0; i < count; i++) {
    scrollPositions.push(width * i + carouselGap * i);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((active) => (active === count - 1 ? 0 : active + 1));
    }, speed);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    handleClick(active);
  }, [active]);

  function handleClick(key: number) {
    if (carouselRef) {
      setActive(key);
      carouselRef.current!.scrollTo(scrollPositions[key], 0);
    }
  }

  return (
    <Box className={className}>
      <Wrapper width={width} ref={carouselRef}>
        <Container width={width} count={count} carouselGap={carouselGap}>
          {items.map(({ title, body }, index) => (
            <CarouselItem key={index}>
              <HeadingContainer>{title}</HeadingContainer>
              <BodyContainer>{body}</BodyContainer>
            </CarouselItem>
          ))}
        </Container>
      </Wrapper>
      <ButtonContainer width={width}>
        <ButtonWrapper>
          {items.map((_item, index) => (
            <Circle
              key={index}
              onClick={() => handleClick(index)}
              active={active === index}
            />
          ))}
        </ButtonWrapper>
      </ButtonContainer>
    </Box>
  );
}

export { Carousel };
