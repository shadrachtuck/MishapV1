import React from 'react';
import Icon from './icons';
import { ButtonLinksWrapper, ButtonListItem } from './styles';
import { Anchor } from '../Elements';
import { AnchorProps } from '../Elements/Anchor/anchor';

type Link = {
  name: string;
  href: string;
};

export type SocialMediaLinksProps = AnchorProps & {
  links: Array<Link>;
};

const SocialMediaLinks = ({
  color,
  links,
}: SocialMediaLinksProps): JSX.Element => (
  <nav>
    <ButtonLinksWrapper>
      {links.map(({ name, href }) => (
        <ButtonListItem key={name}>
          <Anchor href={href} color={color} target="_blank" styleAsButton>
            <Icon name={name} aria-hidden />
            {name}
          </Anchor>
        </ButtonListItem>
      ))}
    </ButtonLinksWrapper>
  </nav>
);

export default SocialMediaLinks;
