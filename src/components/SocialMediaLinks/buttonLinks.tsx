import React from 'react';
import { ButtonLinksWrapper } from './styles';
import { AnchorProps } from '../Elements/Anchor/anchor';
import ButtonLink from './buttonLink';

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
        <li key={name}>
          <ButtonLink href={href} name={name} color={color} />
        </li>
      ))}
    </ButtonLinksWrapper>
  </nav>
);

export default SocialMediaLinks;
