import React from 'react';
import config from '../../../config/metaData';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
const SocialMediaLinks = (): JSX.Element => {
  return (
    <nav className="footer-nav">
      <ul className="footer-navbar">
        <li>
          <a href={config.socials.instagram} target="_blank">
            <FaInstagram />
          </a>
        </li>

        <li>
          <a href={config.socials.facebook} target="_blank">
            <FaFacebook />
          </a>
        </li>

        <li>
          <a href={config.socials.twitter} target="_blank">
            <FaTwitter />
          </a>
        </li>

        <li>
          <a href={config.socials.bandcamp} target="_blank">
            bandcamp
            {/* <FaBandcamp /> */}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SocialMediaLinks;
