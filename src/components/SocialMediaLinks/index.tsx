import React from 'react';
import { IconType } from 'react-icons';

type Link = {
  name: string;
  href: string;
  Icon: IconType;
};

export type SocialMediaLinksProps = {
  links: Array<Link>;
};

const SocialMediaLinks = ({ links }: SocialMediaLinksProps): JSX.Element => (
  <nav className="footer-nav">
    <ul className="footer-navbar">
      {links.map(({ name, href, Icon }) => (
        <li key={name}>
          <a href={href} target="_blank" rel="noreferrer">
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default SocialMediaLinks;
