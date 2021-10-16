import React from 'react';
import config from '../../../config/metaData';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
const SocialMediaLinks = (): JSX.Element => {
  return (
    <nav className="footer-nav">
      <ul className="footer-navbar">
        <li>
          <a href={config.socials.instagram} target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </li>

        <li>
          <a href={config.socials.facebook} target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>
        </li>

        <li>
          <a href={config.socials.twitter} target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
        </li>

        <li>
          <a href={config.socials.bandcamp} target="_blank" rel="noreferrer">
            bandcamp
            {/* <FaBandcamp /> */}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SocialMediaLinks;
