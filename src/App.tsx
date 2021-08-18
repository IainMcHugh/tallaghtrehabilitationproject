import React, { useEffect } from 'react';
import ReactGa from 'react-ga';
import { ThemeProvider } from 'styled-components';

import { Routing } from 'components/Routing';
import { theme } from 'styles/theme';
import GlobalStyles from 'styles/Global';

function App() {
  useEffect(() => {
    ReactGa.initialize('G-0CQTH3YDW8');

    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Routing />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
