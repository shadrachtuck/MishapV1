import { css } from 'styled-components';
import {
  color,
  getFontProperties,
  above,
  font,
  spacing,
} from '../utils/mixins';

const typography = css`
  ul {
    list-style: none;
    padding: 0;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
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

  mark {
    background-color: transparent;
    color: inherit;
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

  p {
    font-weight: ${font('weight', 'light')};
    &:not(p:last-of-type) {
      margin-bottom: ${spacing('medium')};
    }
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
`;

export default typography;
