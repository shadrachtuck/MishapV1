import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
html {
	scroll-behavior: smooth;
}


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
		letter-spacing: 0.025rem;
		line-height: 1.75rem;
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


	h1, h2, h3, h4, h5, h6 {
		color: inherit;
		font-weight: 300;
		line-height: 1.75rem;
		margin-bottom: 1rem;
		text-transform: uppercase;
	}

		h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {
			color: inherit;
			text-decoration: none;
			border: 0;
		}

	h2 {
		font-size: 1.5rem;
		letter-spacing: 0.1rem;
	}

	h3 {
		font-size: 1.15rem;
		letter-spacing: 0.025rem;
	}

	sub {
		font-size: 0.8rem;
		position: relative;
		top: 0.5rem;
	}

	sup {
		font-size: 0.8rem;
		position: relative;
		top: -0.5rem;
	}

	hr {
		border-top: solid 1px rgba(124, 128, 129, 0.2);
		border: 0;
		margin-bottom: 1.5rem;
	}

	blockquote {
		border-left: solid 0.5rem rgba(124, 128, 129, 0.2);
		font-style: italic;
		padding: 1rem 0 1rem 2rem;
	}
`;

export default GlobalStyles;
