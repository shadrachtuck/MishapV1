// import styled identifier for prettier to know how to format/lint
import * as styled from 'styled-components';
import {
  above,
  color,
  font,
  getFontProperties,
  spacing,
  timing,
} from './mixins';

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
      display: flex;
      border: none;
      text-decoration: none;

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: inherit;
        height: inherit;

        /* redefine hover styles here from it somehow being overwritten by the list-item */
        &:hover {
          &,
          span {
            color: ${color('gray')};
          }
        }
      }
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
    ${getFontProperties({
      family: 'roboto',
      size: 'sm',
      fontColor: 'black',
      weight: 'light',
      lineHeight: 24,
      letterSpacing: 'base',
    })}

    ${above.medium`
      ${getFontProperties({
        size: 'md',
        lineHeight: 28,
      })}
    `}
  }

  a {
    ${getFontProperties({
      fontColor: 'black',
      size: 'sm',
      lineHeight: 24,
      letterSpacing: 'spread',
    })}

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

    ${above.medium`
      ${getFontProperties({
        size: 'md',
        lineHeight: 32,
      })}
    `}
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
    ${getFontProperties({
      size: 'xl',
      lineHeight: 56,
      letterSpacing: 'spread',
    })}

    ${above.medium`  
      ${getFontProperties({
        size: 'xxl',
        lineHeight: 75,
      })}
    `}
  }

  h2 {
    margin-bottom: ${spacing('small')};
    ${getFontProperties({
      size: 'lg',
      lineHeight: 36,
      letterSpacing: 'spread',
    })}

    ${above.medium`  
      ${getFontProperties({
        size: 'xl',
        lineHeight: 52,
      })}
    `}
  }

  h3 {
    text-decoration: underline;
    ${getFontProperties({ size: 'md' })}

    ${above.medium`
      ${getFontProperties({ size: 'lg' })}
    `}
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
