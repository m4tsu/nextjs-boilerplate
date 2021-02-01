import 'styled-components';

const colors = {
  white: '#FFFFFF',
  text: {
    black: '#25282B',
  },
  primary: {
    default: '#003B59',
    dark: '#082838',
    light: '#126FA1',
    100: '#0D568A',
    300: '#42A0C6',
    400: '#69C7E2',
    background: '#F2F9F',
  },
  secondary: { default: '#C9355F', dark: '#AC2859', light: '#D45F7F' },
  lightGray: {
    1: '#E0E1E2',
    2: '#E5E5E5',
    3: '#DDDDDD',
  },
  gray: {
    3: '#666666',
  },
} as const;

export const theme = {
  colors,
  buttonColors: {
    normal: {
      default: colors.gray[3],
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
