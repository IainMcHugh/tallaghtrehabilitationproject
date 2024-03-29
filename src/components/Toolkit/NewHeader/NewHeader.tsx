import React, { useRef, useEffect, useState } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import styled from 'styled-components';
import ReactGa from 'react-ga4';
import { motion, useCycle } from 'framer-motion';
import { Phone, CreditCard } from 'react-feather';

import { breakpoints } from 'styles/breakpoints';
import { useDimensions } from 'hooks/useDimensions';
import { MenuToggle } from 'components/Toolkit/MenuToggle/MenuToggle';
import { Link } from 'components/Toolkit/Link/Link';
import { MobileMenuItem } from 'components/Toolkit/NewHeader/components/MobileMenuItem';
import { ButtonLink } from 'components/Toolkit/Link/ButtonLink';
import { DesktopMenu } from 'components/Toolkit/NewHeader/components/DesktopMenu';
import type { IListItems } from 'types';
import { useRefferalForms } from 'hooks/useReferralForms';
import { usePrismic } from 'services/prismic';

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

const LogoContainer = styled(ReactLink)`
  position: absolute;
  top: 12px;
  left: 12px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.YELLOW};
  transition: opacity 200ms ease-in-out;

  z-index: 9999;

  & > svg {
    width: 48px;
    height: 48px;
  }

  &:hover {
    opacity: 0.8;
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
  z-index: 9990;
  ${({ isOpen }) => (isOpen ? 'bottom: 0;' : 'height: 72px;')}

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

const SButtonLink = styled(ButtonLink)`
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
  const [isCurrentlyOpen, setIsCurrentlyOpen] = useState<boolean>(false);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const prismic = usePrismic();
  const { forms } = useRefferalForms(prismic);
  const listItems: IListItems[] = [
    {
      displayText: 'About',
      href: '/about',
      subListItems: [
        {
          displayText: 'Board Of Management',
          href: '/about/board_of_management',
        },
        { displayText: 'Student Placement', href: '/about/student_placement' },
        { displayText: 'Annual Reports', href: '/about/annual_reports' },
      ],
    },
    {
      displayText: 'Day Programme',
      href: '/dayprogramme',
      subListItems: [
        {
          displayText: 'Therapeutic Intervention',
          href: '/dayprogramme/therapeutic_intervention',
        },
        {
          displayText: 'Educational Intervention',
          href: '/dayprogramme/educational_intervention',
        },
        { displayText: 'Programme Path', href: '/dayprogramme/programme_path' },
        { displayText: 'Outreach', href: '/dayprogramme/outreach' },
        {
          displayText: 'Criteria for Assessment',
          href: forms?.criteriaForAssessment ?? '',
          external: true,
        },
        {
          displayText: 'Download Referral Form',
          href: forms?.dayProgrammeReferralForm ?? '',
          external: true,
          download: true,
        },
      ],
    },
    {
      displayText: 'Aftercare',
      href: '/aftercare',
      subListItems: [
        {
          displayText: 'Download Referral Form',
          href: forms?.aftercareReferralForm ?? '',
          download: true,
          external: true,
        },
      ],
    },
    {
      displayText: 'Room Rental',
      href: '/roomrental',
      subListItems: [
        {
          displayText: 'Room Rental Booklet',
          href: forms?.roomRentalBooklet ?? '',
          external: true,
          download: true,
        },
      ],
    },
    {
      displayText: 'Contact',
      href: '/contact',
      subListItems: [
        { displayText: 'Make a Donation', href: '/contact/donate' },
      ],
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

  function handleDonateClick() {
    ReactGa.event({
      category: 'link',
      action: 'donate-navigation',
      label: 'Clicking the Donate link',
    });
    return true;
  }

  function handleCallUsClick() {
    ReactGa.event({
      category: 'button',
      action: 'call-us-button',
      label: 'Clicking the Donate link',
    });
    return true;
  }

  return (
    <Container>
      <LogoContainer to="/">
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
        isOpen={isCurrentlyOpen}
        onAnimationStart={() => isOpen && setIsCurrentlyOpen(true)}
        onAnimationComplete={() => !isOpen && setIsCurrentlyOpen(false)}
      >
        <MotionDiv variants={sidebar} />
        <SMenuToggle toggle={() => toggleOpen()} />
        <MobileMenuContainer variants={variants} isOpen={isCurrentlyOpen}>
          {listItems.map(({ displayText, href }, index) => (
            <SMobileMenuItem key={index}>
              <Link href={href}>{displayText}</Link>
            </SMobileMenuItem>
          ))}
          <ButtonContainer variants={buttonVariants}>
            <SButtonLink
              icon={<CreditCard />}
              href="/contact/donate"
              isClientLink={true}
              onClick={handleDonateClick}
            >
              Donate
            </SButtonLink>
            <ButtonLink
              icon={<Phone />}
              variant="SECONDARY"
              href="tel:014597705"
              onClick={handleCallUsClick}
            >
              Call Us
            </ButtonLink>
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
        <ButtonLink
          icon={<CreditCard />}
          href="/contact/donate"
          isClientLink={true}
          onClick={handleDonateClick}
        >
          Donate
        </ButtonLink>
        <ButtonLink
          icon={<Phone />}
          variant="SECONDARY"
          href="tel:014597705"
          onClick={handleCallUsClick}
        >
          Call Us
        </ButtonLink>
      </DesktopButtonContainer>
    </Container>
  );
}

export { NewHeader };
