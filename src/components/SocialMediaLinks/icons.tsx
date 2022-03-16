import React from 'react';
import { FaFacebook, FaTwitch, FaSoundcloud, FaBandcamp } from 'react-icons/fa';
import { TiSocialInstagram, TiSocialTwitter, TiLink } from 'react-icons/ti';
import { BiStore } from 'react-icons/bi';

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
    case 'store':
      return <BiStore />;
    default:
      return <TiLink />;
  }
};

export default Icon;
