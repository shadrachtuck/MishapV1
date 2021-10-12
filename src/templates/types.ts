import { PageProps } from 'gatsby';
import { Strapi } from '../typings/strapi';

export type TemplateProps = PageProps & {
  data: Strapi;
};

type SiteMetaData = {
  title: string;
  description: string;
  author: {
    name: string;
    bio: string;
  };
};

export type SiteData = {
  site: {
    siteMetadata: SiteMetaData;
  };
};
