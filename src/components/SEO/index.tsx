import React from 'react';
import { UploadFile } from '../../typings/strapi';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export interface SEOProps {
  title: string;
  description: string;
  image?: UploadFile;
  lang?: string;
  meta?: any[];
}

type SiteMetaData = {
  title: string;
  description: string;
  author: string;
};

type Site = {
  siteMetadata: SiteMetaData;
};

type SiteData = {
  site: Site;
};

const siteDataQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

const SEO = ({
  title,
  description,
  image,
  lang,
  meta,
}: SEOProps): JSX.Element => {
  // TODO: add SiteData to useStaticQuery for type safety
  const { site } = useStaticQuery<SiteData>(siteDataQuery);

  const metaDescription = description || site.siteMetadata.description;
  const imageData = image?.imageFile.childImageSharp.gatsbyImageData;

  const metaData = [
    {
      name: 'lang',
      content: 'en',
    },
    {
      name: 'viewport',
      content:
        '<meta name="viewport" content="width=device-width, initial-scale=1">',
    },
    {
      name: 'description',
      content: metaDescription,
    },
    {
      property: 'og:title',
      content: title,
    },
    {
      property: 'og:description',
      content: metaDescription,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      name: 'twitter:creator',
      content: site.siteMetadata.author,
    },
    {
      name: 'twitter:title',
      content: title,
    },
    {
      name: 'twitter:description',
      content: metaDescription,
    },
  ];

  if (meta) metaData.concat(meta);
  if (image)
    metaData.concat([
      {
        property: 'og:image',
        content: image.url,
      },
      {
        property: 'og:image:width',
        content:
          imageData && imageData.width < 1200
            ? String(imageData.width)
            : '1200',
      },
      {
        property: 'og:image:height',
        content:
          imageData && imageData.height < 628
            ? String(imageData.height)
            : '628',
      },
    ]);

  return (
    <Helmet
      htmlAttributes={{
        lang: lang,
      }}
      title={title}
      titleTemplate="%s"
      meta={metaData}
    />
  );
};

export default SEO;
