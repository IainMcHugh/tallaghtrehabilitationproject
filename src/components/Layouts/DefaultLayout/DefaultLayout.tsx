import React from 'react';
import type { ReactNode } from 'react';

import { NewHeader } from 'components/Toolkit/NewHeader/NewHeader';
import { NewFooter } from 'components/Toolkit/NewFooter/NewFooter';

interface IDefaultLayout {
  children: ReactNode;
}

function DefaultLayout({ children }: IDefaultLayout) {
  return (
    <>
      <NewHeader />
      {children}
      <NewFooter />
    </>
  );
}

export { DefaultLayout };
