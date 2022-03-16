import React from 'react';
import Icon from './icons';
import { SocialMediaLinksWrapper, SocialMediaNavWrapperProps } from './styles';
import { Anchor } from '../Elements';
import { AnchorProps } from '../Elements/Anchor/anchor';

type Link = {
  name: string;
  href: string;
};

export type SocialMediaLinksProps = SocialMediaNavWrapperProps &
  AnchorProps & {
    links: Array<Link>;
  };

const SocialMediaLinks = ({
  color,
  links,
  iconSize,
  styleAsButton,
  addVerticalSpacing,
  displayHorizontally,
}: SocialMediaLinksProps): JSX.Element => (
  <nav>
    <SocialMediaLinksWrapper
      iconSize={iconSize}
      addVerticalSpacing={addVerticalSpacing}
      displayHorizontally={displayHorizontally}
    >
      {links.map(({ name, href }) => (
        <li key={name}>
          <Anchor
            href={href}
            color={color}
            target="_blank"
            styleAsButton={styleAsButton}
          >
            <Icon name={name} />
          </Anchor>
        </li>
      ))}
    </SocialMediaLinksWrapper>
  </nav>
);

export default SocialMediaLinks;
