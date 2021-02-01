import 'styled-components';

const colors = {
  white: '#FFFFFF',
  text: {
    black: '#25282B',
  },
  primary: {
    default: '#28385E',
    dark: '#082838',
    light: '#126FA1',
  },
  secondary: {
    default: '#00b5ad',
    dark: '#319795',
    light: '#e1f7f7',
  },
  lightGray: '#DDDDDD',
  gray: '#666666',
} as const;

export const theme = {
  colors,
  buttonColors: {
    normal: {
      default: colors.gray,
    },
    primary: {
      default: colors.primary.default,
      hover: colors.primary.dark,
      active: colors.primary.light,
    },
    secondary: {
      default: colors.secondary.default,
      hover: colors.secondary.dark,
      active: colors.secondary.light,
    },
  },
} as const;

type AppTheme = typeof theme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends AppTheme {}
}
