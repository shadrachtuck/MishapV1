import React from 'react';
import styled, { css, DefaultTheme } from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import {
  above,
  border,
  boxShadow,
  color,
  getFontProperties,
  padding,
  timing,
} from '../../../styled-components/utils/mixins';

export type AnchorProps = {
  color?: keyof DefaultTheme['colors'];
  styleAsButton?: boolean;
};

const sharedAnchorStyles = css<AnchorProps>`
  width: 100%;
  text-decoration: none;
  text-transform: uppercase;
  background-color: transparent;
  color: ${props => (props.color ? color(props.color) : color('gray'))};

  ${getFontProperties({
    fontColor: 'black',
    size: 'sm',
    lineHeight: 24,
    letterSpacing: 'spread',
  })}

  ${above.medium`
      ${getFontProperties({
        size: 'md',
        lineHeight: 32,
      })}
  `}

  &:hover {
    transition: color ${timing('fast')} ease-in-out,
      border-color ${timing('fast')} ease-in-out,
      background-color ${timing('fast')} ease-in-out,
      transform ${timing('fast')} ease-in-out;
    color: ${color('gray')};
  }

  ${({ styleAsButton }) =>
    styleAsButton
      ? css`
          display: flex;
          align-items: center;
          justify-content: center;
          padding: ${padding('xsmall')};
          border: ${border('solidBlack')};

          &:hover {
            box-shadow: ${boxShadow('low')};
            transition: transform ${timing('fast')} ease-out,
              box-shadow ${timing('fast')} ease-out;
            transform: scale(1.01);
          }
        `
      : css<AnchorProps>`
          &:active,
          &:hover,
          &:visited {
            text-decoration: none;
            outline: 0;
            border-bottom-color: transparent;
          }
        `}
`;

// External Link
const ExternalLink = styled.a<AnchorProps>`
  ${sharedAnchorStyles}
`;

// Internal Link
const InternalLink = styled(GatsbyLink)`
  ${sharedAnchorStyles}
`;

const Anchor = ({
  children,
  target,
  className,
  to,
  styleAsButton,
  activeClassName,
  partiallyActive,
  color,
  ...other
}: any): JSX.Element => {
  const isInternalLink = /^\/(?!\/)/.test(to);

  if (isInternalLink) {
    return (
      <InternalLink
        to={to}
        color={color}
        className={className}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
      >
        {children}
      </InternalLink>
    );
  }
  return (
    <ExternalLink
      className={className}
      href={to}
      color={color}
      styleAsButton={styleAsButton}
      {...other}
      target={target}
      rel="noreferrer"
    >
      {children}
    </ExternalLink>
  );
};

export default styled(Anchor)``;
