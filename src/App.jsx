import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

import AppHolder from "./components/AppHolder";
import GlobalStyles from "./styles/Global";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppHolder />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
