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
  }
}
