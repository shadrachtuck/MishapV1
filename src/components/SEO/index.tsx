import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import { UploadFile } from '../../typings/strapi';

type MetaDataIndex = {
  name: string;
  content: string;
};

export interface SEOProps {
  title?: string;
  description?: string;
  image?: UploadFile;
  lang?: string;
  meta?: MetaDataIndex[];
}

type SiteMetaData = {
  title: string;
  description: string;
  image: string;
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
        # image
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
  const {
    site: {
      siteMetadata: {
        title: defaultTitle,
        description: defaultDescription,
        image: defaultImage,
        author,
      },
    },
  } = useStaticQuery<SiteData>(siteDataQuery);

  const siteTitle = title ?? defaultTitle;
  const metaDescription = description ?? defaultDescription;
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
      content: siteTitle,
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
      content: author,
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
  else metaData.concat([{ property: 'og:image', content: defaultImage }]);

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
