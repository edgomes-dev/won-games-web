import { ThemeProvider } from 'styled-components';
import { RenderResult, render } from '@testing-library/react';

import { defualtTheme } from '../../styles/defaultTheme';

export function renderWithTheme(children: React.ReactNode): RenderResult {
  return render(<ThemeProvider theme={defualtTheme}>{children}</ThemeProvider>);
}
