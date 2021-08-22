import React from 'react';
import styled from 'styled-components';

import { DefaultLayout } from 'components/Layouts/DefaultLayout/DefaultLayout';

const Skeleton = styled.div`
  height: 100vh;
`;

function HomePage() {
  return (
    <>
      <DefaultLayout>
        <Skeleton />
      </DefaultLayout>
    </>
  );
}

export { HomePage };
