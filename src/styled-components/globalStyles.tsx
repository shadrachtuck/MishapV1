// import styled identifier for prettier to know how to format/lint
import * as styled from 'styled-components';
import { color, font, padding, timing } from './mixins';

const GlobalStyles = styled.createGlobalStyle`
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

  ul {
    list-style: none;

    li {
      border: none;
      text-decoration: none;
    }
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
    font-family: ${font('family', 'roboto')};
    font-weight: ${font('weight', 'light')};
    font-size: ${font('size', 'md')};
    letter-spacing: ${font('letterSpacing', 'base')};
    line-height: 1.75rem;
  }

  a {
    color: ${color('black')};
    font-size: ${font('size', 'md')};
    letter-spacing: ${font('letterSpacing', 'spread')};
    text-transform: uppercase;
    background-color: transparent;
    text-decoration: none;

    transition: color ${timing('fast')} ease-in-out,
      border-color ${timing('fast')} ease-in-out,
      background-color ${timing('fast')} ease-in-out;

    &:active,
    &:hover,
    &:visited {
      text-decoration: none;
      outline: 0;
      border-bottom-color: transparent;
    }

    &:visited {
      color: ${color('black')};
    }

    &:hover {
      color: ${color('gray')};
    }
  }

  p {
    font-weight: ${font('weight', 'light')};
  }

  b,
  strong {
    font-weight: ${font('weight', 'bold')};
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
    font-weight: ${font('weight', 'bold')};
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
    text-decoration: underline;
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

  button {
    border-radius: 2px;
    font-family: ${font('family', 'roboto')};
    letter-spacing: ${font('letterSpacing', 'middle')};
    padding: ${padding('xxsmall')};
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
