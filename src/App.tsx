import React, { useEffect } from 'react';
import ReactGa from 'react-ga4';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Routing } from 'components/Routing';
import { theme } from 'styles/theme';
import GlobalStyles from 'styles/Global';

function App() {
  useEffect(() => {
    ReactGa.initialize('G-4XH0G3TMV8');
    ReactGa.send({
      hitType: 'pageview',
      page: `${window.location.pathname + window.location.search}`,
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Routing />
      <GlobalStyles />
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
