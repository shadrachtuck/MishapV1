import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
/* html, body, #___gatsby, #gatsby-focus-wrapper {
  min-height: 100vh;
} */

html, body, div, span, applet, object,
iframe, h1, h2, h3, h4, h5, h6, p, blockquote,
pre, a, abbr, acronym, address, big, cite,
code, del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var, b,
u, i, center, dl, dt, dd, ol, ul, li, fieldset,
form, label, legend, table, caption, tbody,
tfoot, thead, tr, th, td, article, aside,
canvas, details, embed, figure, figcaption,
footer, header, hgroup, menu, nav, output, ruby,
section, summary, time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;}

article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;}

body {
	line-height: 1;
}

ol, ul {
	list-style: none;
}

blockquote, q {
	quotes: none;
}

	blockquote:before, blockquote:after, q:before, q:after {
		content: '';
		content: none;
	}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

body {
	-webkit-text-size-adjust: none;
}

mark {
	background-color: transparent;
	color: inherit;
}

input::-moz-focus-inner {
	border: 0;
	padding: 0;
}

input, select, textarea {
	-moz-appearance: none;
	-webkit-appearance: none;
	-ms-appearance: none;
	appearance: none;
}

/* Basic */

	html {
		box-sizing: border-box;
	}

	*, *:before, *:after {
		box-sizing: inherit;
	}

	body {
		background: #f3f6fa;
	}

	body, input, select, textarea {
		color: #7c8081;
		font-family: 'Lato', sans-serif;
		font-size: 15pt;
		font-weight: 300;
		letter-spacing: 0.025em;
		line-height: 1.75em;
	}

	a {
		transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out, background-color 0.2s ease-in-out;
		color: #3fb1a3;
		text-decoration: none;
		border-bottom: dotted 1px;
	}

		a:hover {
			border-bottom-color: transparent;
		}

	strong, b {
		font-weight: 400;
	}

	p, ul, ol, dl, table, blockquote {
		margin: 0 0 2em 0;
	}

	h1, h2, h3, h4, h5, h6 {
		color: inherit;
		font-weight: 300;
		line-height: 1.75em;
		margin-bottom: 1em;
		text-transform: uppercase;
	}

		h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {
			color: inherit;
			text-decoration: none;
			border: 0;
		}

	h2 {
		font-size: 1.5em;
		letter-spacing: 0.1em;
	}

	h3 {
		font-size: 1.15em;
		letter-spacing: 0.025em;
	}

	sub {
		font-size: 0.8em;
		position: relative;
		top: 0.5em;
	}

	sup {
		font-size: 0.8em;
		position: relative;
		top: -0.5em;
	}

	hr {
		border-top: solid 1px rgba(124, 128, 129, 0.2);
		border: 0;
		margin-bottom: 1.5em;
	}

	blockquote {
		border-left: solid 0.5em rgba(124, 128, 129, 0.2);
		font-style: italic;
		padding: 1em 0 1em 2em;
	}
`;

export default GlobalStyles;
