import React from 'react';
import { ThemeProvider } from 'styled-components';
import { addDecorator } from '@storybook/react';

import GlobalStyles from '../src/styles/Global';
import { theme } from '../src/styles/theme';

const GlobalStyleAdded = (StoryFunction) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {StoryFunction()}
  </ThemeProvider>
);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
};

addDecorator(GlobalStyleAdded);
