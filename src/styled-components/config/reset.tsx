import { css } from 'styled-components';

const reset = css`
  /*
  Josh's Custom CSS Reset
  https://www.joshwcomeau.com/css/custom-css-reset/
  */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
  }
  html,
  body {
    height: 100%;
    scroll-behavior: smooth;

    @media (prefers-reduced-motion) {
      scroll-behavior: none;
    }
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
  input,
  button,
  textarea,
  select {
    font: inherit;
    border: none;
  }
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }
  #__gatsby {
    isolation: isolate;
  }

  /* TODO: Investigate if this is necessary */
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

export default reset;
