import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/lib/styled-components/theme';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];
