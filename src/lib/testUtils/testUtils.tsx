import { RenderOptions, RenderResult, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/lib/styled-components/theme';

const customRender = (
  ui: React.ReactElement,
  options: RenderOptions = {}
): RenderResult => {
  const WrappedUI = () => <ThemeProvider theme={theme}>{ui}</ThemeProvider>;

  return render(WrappedUI(), { ...options });
};

export { customRender as render };
