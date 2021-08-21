import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useCycle } from 'framer-motion';

import { breakpoints } from 'styles/breakpoints';
import { useDimensions } from 'hooks/useDimensions';

const Container = styled.header`
  display: relative;
  height: 72px;
  padding: ${({ theme }) => `${theme.spacing.S12}`};
  background-color: ${({ theme }) => theme.colors.BLUE};
  border-radius: ${({ theme }) => theme.borderRadius.bottom8};
  color: ${({ theme }) => theme.colors.YELLOW};
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${breakpoints.large} {
    height: 100px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: ${({ theme }) => theme.borderRadius.all8};
  border: ${({ theme }) => `2px solid ${theme.colors.YELLOW}66`};

  & > svg {
    width: 48px;
    height: 48px;
  }
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
  margin-right: ${({ theme }) => theme.spacing.S8};
`;

const LogoTextContainer = styled.div``;

const LogoText = styled.p`
  ${({ theme }) => theme.fontSize.F1216};
  font-weight: ${({ theme }) => theme.fontWeight.light};
`;

const Bold = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const HamburgerMenu = styled.button`
  border: 0;
  background-color: transparent;
`;

const MotionNav = styled(motion.nav)`
  position: absolute;
  top: 8px;
  right: 8px;
  bottom: 0;
  width: 300px;
`;

const MotionDiv = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  background: ${({ theme }) => theme.colors.BLUE};
`;

function NewHeader() {
  //   const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const sidebar = {
    open: (height = 100) => ({
      clipPath: `circle(${height * 2 + 350}px at 60px 60px)`,
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: 'circle(30px at 40px 40px)',
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <Container>
      <LogoContainer>
        <Logo src={require('images/full_logo.svg')} alt="logo" />
        <LogoTextContainer>
          <LogoText>
            <Bold>T</Bold>allaght
          </LogoText>
          <LogoText>
            <Bold>R</Bold>ehabilitation
          </LogoText>
          <LogoText>
            <Bold>P</Bold>roject
          </LogoText>
        </LogoTextContainer>
      </LogoContainer>
      <MotionNav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={height}
        ref={containerRef}
      >
        <MotionDiv className="background" variants={sidebar} />
        <HamburgerMenu onClick={() => toggleOpen()}>
          <img
            src={require('images/illustrations/hamburger.svg')}
            alt="menu icon"
          />
        </HamburgerMenu>
      </MotionNav>
      {/* {!menuOpen && (
        <HamburgerMenu onClick={() => setMenuOpen(true)}>
          <img
            src={require('images/illustrations/hamburger.svg')}
            alt="menu icon"
          />
        </HamburgerMenu>
      )}
      {menuOpen && (
        <HamburgerMenu onClick={() => setMenuOpen(false)}>
          <img
            src={require('images/illustrations/close.svg')}
            alt="menu icon"
          />
        </HamburgerMenu>
      )} */}
    </Container>
  );
}

export { NewHeader };
