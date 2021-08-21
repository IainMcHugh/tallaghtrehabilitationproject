import React from 'react';
import type { ReactNode } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface IMobileMenuItem {
  children: ReactNode;
  className?: string;
}

const ListItem = styled(motion.li)`
  transform-origin: 0 0;
`;

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: { stiffness: 10 },
  },
  closed: {
    y: 40,
    opacity: 0,
    transition: { stiffness: 10 },
  },
};

function MobileMenuItem({ children, className }: IMobileMenuItem) {
  return (
    <ListItem
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      {children}
    </ListItem>
  );
}

export { MobileMenuItem };
