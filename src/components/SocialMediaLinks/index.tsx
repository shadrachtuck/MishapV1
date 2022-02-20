import React from 'react';
import { TiLink, TiSocialInstagram, TiSocialTwitter } from 'react-icons/ti';
import { FaFacebook, FaBandcamp, FaTwitch, FaSoundcloud } from 'react-icons/fa';
import { SocialMediaLinksWrapper, SocialMediaNavWrapperProps } from './styles';

type Link = {
  name: string;
  href: string;
};

export type SocialMediaLinksProps = SocialMediaNavWrapperProps & {
  links: Array<Link>;
};

const Icon = ({ name }: { name: string }): JSX.Element => {
  const lowerCaseName = name.toLowerCase();
  switch (lowerCaseName) {
    case 'facebook':
      return <FaFacebook />;
    case 'instagram':
      return <TiSocialInstagram />;
    case 'twitter':
      return <TiSocialTwitter />;
    case 'twitch':
      return <FaTwitch />;
    case 'soundcloud':
      return <FaSoundcloud />;
    case 'bandcamp':
      return <FaBandcamp />;
    default:
      return <TiLink />;
  }
};

const SocialMediaLinks = ({
  links,
  iconSize,
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
          <a href={href} target="_blank" rel="noreferrer">
            <Icon name={name} />
          </a>
        </li>
      ))}
    </SocialMediaLinksWrapper>
  </nav>
);

export default SocialMediaLinks;
