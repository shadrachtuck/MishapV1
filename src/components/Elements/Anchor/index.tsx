import React from 'react';
import styled, { css, DefaultTheme } from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import { color, timing } from '../../../styled-components/utils/mixins';

type Props = {
  color?: keyof DefaultTheme['colors'];
};

const sharedAnchorStyles = css<Props>`
  text-decoration: none;
  transition: ${timing('medium')} ease-out;
  color: ${props => (props.color ? color(props.color) : color('gray'))};

  &:hover {
    border-bottom: 1px solid
      ${props => (props.color ? color(props.color) : color('gray'))};
  }
`;

// External Link
const ExternalLink = styled.a<Props>`
  ${sharedAnchorStyles}
`;

// Internal Link
const InternalLink = styled(GatsbyLink)`
  ${sharedAnchorStyles}
`;

const Anchor = ({
  children,
  className,
  to,
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
      {...other}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </ExternalLink>
  );
};

export default styled(Anchor)``;
