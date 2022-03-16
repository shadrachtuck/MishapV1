import React from 'react';
import { AnchorProps } from '../Elements/Anchor/anchor';
import { Anchor } from '../Elements';
import Icon from './icons';
import styled from 'styled-components';
import { spacing } from '../../styled-components/utils/mixins';

type ButtonLinkProps = AnchorProps & {
  name: string;
  href: string;
  id?: string; // use to override which Link to use if different from display name
  className?: string;
};

const ButtonLink = ({
  id,
  name,
  href,
  color,
  className,
}: ButtonLinkProps): JSX.Element => (
  <Anchor
    href={href}
    color={color}
    target="_blank"
    className={className}
    styleAsButton
  >
    <Icon name={id ?? name} aria-hidden />
    {name}
  </Anchor>
);

export default styled(ButtonLink)`
  svg {
    margin-right: ${spacing('xxsmall')};
  }
`;
