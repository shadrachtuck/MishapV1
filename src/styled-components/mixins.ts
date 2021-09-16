import { css, DefaultTheme, ThemeProps } from 'styled-components';
import { theme } from './defaultTheme';

type CSSParams = Parameters<typeof css>;

type StyleFnMap = Record<
  keyof DefaultTheme['breakpoints'],
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

export const colors =
  (label: keyof DefaultTheme['colors']) =>
  (props: ThemeProps<DefaultTheme>): string =>
    props.theme.colors[label];

export const pxToRem = (px: number): string | number => {
  const baseFontSize = 16;
  const remValue = px / baseFontSize;

  return String(remValue) + 'rem';
};
