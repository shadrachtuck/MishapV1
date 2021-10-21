import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  breakpoints: {
    xlarge: '120rem', // 1920px
    large: '75rem', // 1200px
    medium: '63.75rem', // 1020px
    small: '48.0625rem', // 769px
    xsmall: '30rem', //480px
  },
  colors: {
    black: '#000000',
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
      bolder: 700,
      bold: 500,
      normal: 400,
      light: 300,
    },
    family: {
      light: 'RobotoMonoLight',
      italic: 'RobotoMonoItalic',
      regular: 'RobotoMonoRegular',
      semiBold: 'RobotoMonoSemiBold',
      bold: 'RobotoMonoBold',
    },
    letterSpacing: {
      tight: '0rem',
      base: '0.05rem',
      middle: '0.25rem',
      spread: '0.5rem',
    },
  },
};
