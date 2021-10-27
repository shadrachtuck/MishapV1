import {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components';
import { theme } from './defaultTheme';

type CSSParams = Parameters<typeof css>;

type StyleFnMap = Record<
  keyof DefaultTheme['breakpoints'],
  /* eslint-disable @typescript-eslint/no-explicit-any*/
  (..._args: CSSParams) => any
>;

const typedKeys = <T extends DefaultTheme['breakpoints']>(
  obj: T,
): Array<keyof T> => Object.keys(obj) as Array<keyof T>;

const { breakpoints } = theme;

export const below = typedKeys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (max-width: ${breakpoints[label]}) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {} as StyleFnMap);

export const above = typedKeys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {} as StyleFnMap);

/* Each function declaration provides a short-hand
  way to access props.theme variables
*/

export const color =
  (label: keyof DefaultTheme['colors']) =>
  (props: ThemeProps<DefaultTheme>): string =>
    props.theme.colors[label];

export const spacing =
  (label: keyof DefaultTheme['spacing']) =>
  (props: ThemeProps<DefaultTheme>): string =>
    props.theme.spacing[label];

export const padding =
  (label: keyof DefaultTheme['padding']) =>
  (props: ThemeProps<DefaultTheme>): string =>
    props.theme.padding[label];

export const timing =
  (
    label: keyof DefaultTheme['timing'],
    themeProps?: ThemeProps<DefaultTheme>,
    addMillisecondSuffix = true,
  ) =>
  (
    props: ThemeProps<DefaultTheme> | undefined = themeProps,
  ): string | number | null => {
    if (!props) return null;

    return addMillisecondSuffix
      ? `${props.theme.timing[label]}ms`
      : props.theme.timing[label];
  };

export const font =
  <
    Variant extends keyof DefaultTheme['font'],
    Label extends Extract<keyof DefaultTheme['font'][Variant], string | number>,
  >(
    variant: Variant,
    label: Label,
    /* eslint-disable @typescript-eslint/explicit-module-boundary-types */
  ) =>
  (props: ThemeProps<DefaultTheme>) =>
    props.theme.font[variant][label];

export const pxToRem = (px: number): string | number => {
  const baseFontSize = 16;
  const remValue = px / baseFontSize;

  return String(remValue) + 'rem';
};

// TODO: guard against using other font-size values such as 'em' or 'percentage'
export const remToPx = (rem: string): number => {
  const baseFontSize = 16;
  const letterIndex = rem.indexOf('r');
  const numRem = rem.slice(0, letterIndex);

  return Number(numRem) * baseFontSize;
};

export const calculateLineHeightFromPxValue = (
  px: number,
  fontSize: string,
): number => {
  const newLineHeight =
    px / (typeof fontSize === 'string' ? remToPx(fontSize) : fontSize);

  return newLineHeight;
};

type FontProperties = {
  family?: keyof DefaultTheme['font']['family'];
  size?: keyof DefaultTheme['font']['size'];
  fontColor?: keyof DefaultTheme['colors'];
  weight?: keyof DefaultTheme['font']['weight'];
  lineHeight?: number;
  letterSpacing?: keyof DefaultTheme['font']['letterSpacing'];
};

// TODO: Add fallback case for browsers not in support of variable fonts https://fontsource.org/docs/variable-fonts
export const getFontProperties = ({
  family,
  size,
  fontColor,
  weight,
  lineHeight,
  letterSpacing,
}: FontProperties): FlattenInterpolation<ThemeProps<DefaultTheme>> => css`
  ${family &&
  css`
    font-family: ${font('family', family)};
  `}
  ${size &&
  css`
    font-size: ${font('size', size)};
  `}
    ${lineHeight &&
  css`
    line-height: ${props =>
      size
        ? calculateLineHeightFromPxValue(lineHeight, font('size', size)(props))
        : lineHeight};
  `}
  ${fontColor &&
  css`
    color: ${color(fontColor)};
  `}
  ${weight &&
  css`
    font-weight: ${font('weight', weight)};
  `}
${letterSpacing &&
  css`
    letter-spacing: ${font('letterSpacing', letterSpacing)};
  `}
`;
