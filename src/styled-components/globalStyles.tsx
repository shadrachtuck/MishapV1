// import styled identifier for prettier to know how to format/lint
import * as styled from 'styled-components';
import RobotoMonoLight from '../assets/fonts/RobotoMono-Light.ttf';
import RobotoMonoItalic from '../assets/fonts/RobotoMono-Italic.ttf';
import RobotoMonoRegular from '../assets/fonts/RobotoMono-Regular.ttf';
import RobotoMonoSemiBold from '../assets/fonts/RobotoMono-SemiBold.ttf';
import RobotoMonoBold from '../assets/fonts/RobotoMono-Bold.ttf';
import { color, font } from './mixins';

const GlobalStyles = styled.createGlobalStyle`
  @font-face {
    font-family: 'RobotoMonoLight';
    src: local('RobotoMonoLight'), url(${RobotoMonoLight}) format('ttf');
  }
  @font-face {
    font-family: 'RobotoMonoItalic';
    src: local('RobotoMonoItalic'), url(${RobotoMonoItalic}) format('ttf');
  }
  @font-face {
    font-family: 'RobotoMonoRegular';
    src: local('RobotoMonoRegular'), url(${RobotoMonoRegular}) format('ttf');
  }
  @font-face {
    font-family: 'RobotoMonoSemiBold';
    src: local('RobotoMonoSemiBold'), url(${RobotoMonoSemiBold}) format('ttf');
  }
  @font-face {
    font-family: 'RobotoMonoBold';
    src: local('RobotoMonoBold'), url(${RobotoMonoBold}) format('ttf');
  }

  // Reset
  *,
  *:before,
  *:after {
    border-style: solid;
    border-width: 0;
    box-sizing: border-box;
  }

  * {
    font-size: inherit;
    line-height: inherit;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    box-sizing: border-box;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    text-size-adjust: 100%;
  }

  body {
    line-height: 1;
    -webkit-text-size-adjust: none;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;

    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
      content: '';
      content: none;
    }
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  mark {
    background-color: transparent;
    color: inherit;
  }

  // Forms
  input::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  input,
  select,
  textarea {
    appearance: none;
  }

  body,
  input,
  select,
  textarea {
    color: ${color('black')};
    font-family: ${font('family', 'regular')}, sans-serif;
    font-weight: ${font('weight', 'normal')};
    font-size: ${font('size', 'md')};
    letter-spacing: ${font('letterSpacing', 'base')};
    line-height: 1.75rem;
  }

  a {
    background-color: transparent;
    text-decoration: none;
    border-bottom: dotted 1px;
    transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out,
      background-color 0.2s ease-in-out;

    &:active,
    &:hover {
      outline: 0;
      border-bottom-color: transparent;
    }
  }

  b {
    font-weight: ${font('weight', 'bold')};
  }

  strong {
    font-weight: ${font('weight', 'bolder')};
  }

  small {
    font-size: ${font('size', 'sm')};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: inherit;
    text-transform: uppercase;
    letter-spacing: ${font('letterSpacing', 'middle')};
    line-height: 1;

    a {
      color: inherit;
      text-decoration: none;
      border: 0;
    }
  }

  h1 {
    font-size: ${font('size', 'xxl')};
    line-height: 1.171875; // 75px
    letter-spacing: ${font('letterSpacing', 'spread')};
  }

  h2 {
    font-size: ${font('size', 'xl')};
    line-height: 1.15;
  }

  h3 {
    font-size: ${font('size', 'lg')};
  }

  h4 {
    font-size: ${font('size', 'md')};
  }

  h5 {
    font-size: ${font('size', 'base')};
  }

  h6 {
    font-size: ${font('size', 'sm')};
  }

  sub,
  sup {
    font-size: ${font('size', 'sm')};
    position: relative;
    line-height: 0;
    vertical-align: baseline;
  }

  sub {
    top: 0.5rem;
  }

  sup {
    top: -0.5rem;
  }

  hr {
    border-top: solid 1px ${color('gray')};
    border: 0;
    margin-bottom: 1.5rem;
  }

  blockquote {
    border-left: solid 0.5rex ${color('gray')};
    font-style: italic;
    padding: 1rem 0 1rem 2rem;
  }

  abbr {
    &[title] {
      border-bottom: 1px dotted;
    }
  }

  // Accessibility
  // ==================

  audio {
    :not([controls]) {
      display: none;
    }
  }

  [aria-busy='true'] {
    cursor: progress;
  }

  [aria-controls] {
    cursor: pointer;
  }

  [aria-disabled] {
    cursor: default;
  }

  [hidden] {
    display: none;
  }
`;

export default GlobalStyles;
