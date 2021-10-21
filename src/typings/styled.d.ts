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
        xl: string;
        lg: string;
        md: string;
        base: string;
        sm: string;
      };
      weight: {
        bolder: number;
        bold: number;
        normal: number;
        light: number;
      };
      family: {
        primary: string;
        secondary: string;
        bold: string;
      };
      letterSpacing: {
        tight: string;
        middle: string;
        spread: string;
      };
    };
  }
}
