import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion, useCycle } from 'framer-motion';
import { Phone, CreditCard } from 'react-feather';

import { breakpoints } from 'styles/breakpoints';
import { useDimensions } from 'hooks/useDimensions';
import { MenuToggle } from 'components/Toolkit/MenuToggle/MenuToggle';
import { Link } from 'components/Toolkit/Link/Link';
import { MobileMenuItem } from 'components/Toolkit/NewHeader/components/MobileMenuItem';
import { Button } from 'components/Toolkit/Button/Button';
import { DesktopMenu } from 'components/Toolkit/NewHeader/components/DesktopMenu';

const Container = styled.header`
  display: relative;
  height: 72px;
  padding: ${({ theme }) => `0 ${theme.spacing.S12}`};
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

  z-index: 9999;

  & > svg {
    width: 48px;
    height: 48px;
  }
`;

const Logo = styled.img`
  width: 48px;
  height: 48px;
  border-radius: ${({ theme }) => theme.borderRadius.all8};
  border: ${({ theme }) => `1px solid ${theme.colors.YELLOW}66`};
  margin-right: ${({ theme }) => theme.spacing.S8};

  ${breakpoints.large} {
    width: 72px;
    height: 72px;
  }
`;

const LogoTextContainer = styled.div``;

const LogoText = styled.p`
  ${({ theme }) => theme.fontSize.F1216};
  font-weight: ${({ theme }) => theme.fontWeight.light};

  ${breakpoints.large} {
    ${({ theme }) => theme.fontSize.F1818};
  }
`;

const Bold = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const MotionNav = styled(motion.nav)<{ isOpen: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 16px;
  width: 100vw;
  z-index: 9999;
  ${({ isOpen }) => (isOpen ? 'bottom: 0;' : 'height: 72px;')}
  /* bottom: 0; */

  ${breakpoints.large} {
    display: none;
  }
`;

const MotionDiv = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background: ${({ theme }) => theme.colors.BLUE};
`;

const SMenuToggle = styled(MenuToggle)`
  position: absolute;
  top: 22px;
  right: 16px;
  border: 0;
  height: 28px;
  width: 28px;
  background-color: transparent;
  cursor: pointer;
`;

const MobileMenuContainer = styled(motion.ul)<{ isOpen: boolean }>`
  position: absolute;
  left: 32px;
  right: 32px;
  top: 138px;
  bottom: 72px;
  display: flex;
  flex-direction: column;
  z-index: 9999;
  list-style: none;
  ${({ isOpen }) => !isOpen && 'display: none;'};
`;

const SMobileMenuItem = styled(MobileMenuItem)`
  margin-bottom: ${({ theme }) => theme.spacing.S28};
`;

const ButtonContainer = styled(motion.div)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`;

const SButton = styled(Button)`
  margin-bottom: ${({ theme }) => theme.spacing.S16};
`;

const DesktopNav = styled.div`
  display: none;

  ${breakpoints.large} {
    display: flex;
    width: 100%;
    height: 100%;
  }
`;

const DesktopList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  width: 100%;
  max-width: 1000px;
  height: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  list-style: none;
`;

const DesktopListItem = styled.li`
  height: 100%;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding-bottom: 16px;
  z-index: 9999;
  & > div {
    display: none;
  }

  &:hover > div,
  & > div:hover {
    display: block;
  }
`;

const SDesktopMenu = styled(DesktopMenu)`
  position: absolute;
  top: 117px;
`;

const DesktopButtonContainer = styled.div`
  display: none;

  ${breakpoints.large} {
    display: grid;
    grid-template-columns: 150px 150px;
    column-gap: ${({ theme }) => theme.spacing.S8};
  }
`;

function NewHeader() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const listItems = [
    {
      displayText: 'About',
      href: '#',
      subListItems: [
        { displayText: 'Board Of Management', href: '#' },
        { displayText: 'Student Placement', href: '#' },
        { displayText: 'Annual Reports', href: '#' },
      ],
    },
    {
      displayText: 'Day Programme',
      href: '#',
      subListItems: [
        { displayText: 'Therapeutic Intervention', href: '#' },
        { displayText: 'Educational Intervention', href: '#' },
        { displayText: 'Programme Path', href: '#' },
        { displayText: 'Outreach', href: '#' },
        { displayText: 'Criteria for Assessment', href: '#' },
        { displayText: 'Download Referral Form', href: '#' },
      ],
    },
    {
      displayText: 'Aftercare',
      href: '#',
      subListItems: [{ displayText: 'Download Referral Form', href: '#' }],
    },
    {
      displayText: 'Room Rental',
      href: '#',
      subListItems: [{ displayText: 'Room Rental Booklet', href: '#' }],
    },
    {
      displayText: 'Contact',
      href: '#',
      subListItems: [{ displayText: 'Make a Donation', href: '#' }],
    },
  ];

  const sidebar = {
    open: (height = 100) => ({
      clipPath: `circle(${height * 4 + 1000}px at 92% 36px)`,
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: 'circle(30px at 92% 36px)',
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const buttonVariants = {
    open: {
      scale: 1,
      opacity: 1,
      transition: { stiffness: 10 },
    },
    closed: {
      scale: 1.1,
      opacity: 0,
      transition: { stiffness: 10 },
    },
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }, [isOpen]);

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
        isOpen={isOpen}
      >
        <MotionDiv variants={sidebar} />
        <SMenuToggle toggle={() => toggleOpen()} />
        <MobileMenuContainer variants={variants} isOpen={isOpen}>
          {listItems.map(({ displayText, href }, index) => (
            <SMobileMenuItem key={index}>
              <Link href={href}>{displayText}</Link>
            </SMobileMenuItem>
          ))}
          <ButtonContainer variants={buttonVariants}>
            <SButton icon={<CreditCard />}>Donate</SButton>
            <Button icon={<Phone />} variant="SECONDARY">
              Call Us
            </Button>
          </ButtonContainer>
        </MobileMenuContainer>
      </MotionNav>
      <DesktopNav>
        <DesktopList>
          {listItems.map(({ displayText, href, subListItems }, index) => (
            <DesktopListItem key={index}>
              <Link href={href} variant="THICK">
                {displayText}
              </Link>
              <SDesktopMenu items={subListItems} />
            </DesktopListItem>
          ))}
        </DesktopList>
      </DesktopNav>
      <DesktopButtonContainer>
        <Button icon={<CreditCard />}>Donate</Button>
        <Button icon={<Phone />} variant="SECONDARY">
          Call Us
        </Button>
      </DesktopButtonContainer>
    </Container>
  );
}

export { NewHeader };
