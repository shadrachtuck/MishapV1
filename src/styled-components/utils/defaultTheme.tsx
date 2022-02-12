import { DefaultTheme } from 'styled-components';

// Values defined as const are used as both a token and an interpolated value within this file
const COLORS = {
  SHADOW: '0deg 0% 23%',
  BLACK: '#000000',
};

export const theme: DefaultTheme = {
  breakpoints: {
    xlarge: '120rem', // 1920px
    large: '75rem', // 1200px
    medium: '63.75rem', // 1020px
    small: '48.0625rem', // 769px
    xsmall: '30rem', //480px
  },
  container: {
    height: {
      mobileHeader: '7.5rem',
    },
  },
  colors: {
    black: COLORS.BLACK,
    shadow: COLORS.SHADOW,
    white: '#ffffff',
    gray: '#7c8081',
  },
  spacing: {
    xxlarge: '4rem',
    xlarge: '3rem',
    large: '2.5rem',
    medium: '2rem',
    small: '1.5rem',
    xsmall: '1rem',
    xxsmall: '0.5rem',
  },
  padding: {
    xxlarge: '4rem',
    xlarge: '3rem',
    large: '2.5rem',
    medium: '2rem',
    small: '1.5rem',
    xsmall: '1rem',
    xxsmall: '0.5rem',
  },
  font: {
    size: {
      xxl: '4rem', // 64px
      xl: '3rem', // 48px
      lg: '2rem', // 32px
      md: '1.375rem', // 22px
      base: '1rem', // 16px
      sm: '0.875rem', // 14px
    },
    weight: {
      bold: 700,
      normal: 400,
      light: 300,
    },
    family: {
      roboto: 'Roboto MonoVariable',
    },
    letterSpacing: {
      tight: '0rem',
      base: '0.05rem',
      middle: '0.25rem',
      spread: '0.5rem',
    },
  },
  timing: {
    fast: 300,
    medium: 500,
  },
  border: {
    solidBlack: `3px solid ${COLORS.BLACK}`,
  },
  boxShadow: {
    low: `0.3px 1px 1.4px hsl(${COLORS.SHADOW} / 0.21),
    1.5px 4.4px 6.4px -0.8px hsl(${COLORS.SHADOW} / 0.61);`,
    medium: `0px 0.4px 0.5px hsl(${COLORS.SHADOW} / 0.51),
    -0.1px 2.5px 3px -0.9px hsl(${COLORS.SHADOW} / 0.61),
    -0.3px 9.2px 11.2px -1.9px hsl(${COLORS.SHADOW} / 0.72);`,
    high: `0px 0.1px 0.1px hsl(${COLORS.SHADOW} / 0.27),
    0px 0.9px 1.1px -0.2px hsl(${COLORS.SHADOW} / 0.31),
    0.1px 1.6px 2px -0.5px hsl(${COLORS.SHADOW} / 0.35),
    0.1px 2.6px 3.3px -0.7px hsl(${COLORS.SHADOW} / 0.38),
    0.2px 3.9px 4.9px -0.9px hsl(${COLORS.SHADOW} / 0.42),
    0.3px 5.8px 7.3px -1.1px hsl(${COLORS.SHADOW} / 0.46),
    0.4px 8.5px 10.7px -1.4px hsl(${COLORS.SHADOW} / 0.5),
    0.6px 12.2px 15.4px -1.6px hsl(${COLORS.SHADOW} / 0.54);`,
  },
};
