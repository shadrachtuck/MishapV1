import { PageProps } from 'gatsby';
import { DefaultTheme, ThemeProps } from 'styled-components';
import { Strapi } from '../typings/strapi';

export type TemplateProps = PageProps & {
  data: Strapi;
  theme: ThemeProps<DefaultTheme>;
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
