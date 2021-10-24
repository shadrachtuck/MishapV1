import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      xlarge: string;
      large: string;
      medium: string;
      small: string;
      xsmall: string;
    };
    colors: {
      black: string;
      white: string;
      gray: string;
    };
    spacing: {
      xxlarge: string;
      xlarge: string;
      large: string;
      medium: string;
      small: string;
      xsmall: string;
      xxsmall: string;
    };
    padding: {
      xxlarge: string;
      xlarge: string;
      large: string;
      medium: string;
      small: string;
      xsmall: string;
      xxsmall: string;
    };
    font: {
      size: {
        xxl: string;
        xl: string;
        lg: string;
        md: string;
        base: string;
        sm: string;
      };
      weight: {
        bold: number;
        normal: number;
        light: number;
      };
      family: {
        roboto: string;
      };
      letterSpacing: {
        tight: string;
        base: string;
        middle: string;
        spread: string;
      };
    };
    timing: {
      fast: number;
    };
  }
}
