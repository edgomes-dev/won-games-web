import React from 'react';

import type { Preview } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { defualtTheme } from "../src/styles/defaultTheme";
import { GlobalStyle } from "../src/styles/GlobalStyle"


const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={defualtTheme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    )
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
};

export default preview;
