const config = require('./config');
const path = require('path');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: {
    siteUrl: config.siteURl,
    title: config.siteTitle,
    description: config.siteDescription,
    author: config.author,
  },

  plugins: [
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-ts',
      options: {
        // disable codegen in favor of custom types
        codegen: false,
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: true,
        fileName: false, // only use DisplayName
        namespace: 'mishap',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets/mishap-designs`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `${__dirname}/src/assets/svg`,
        },
      },
    },
    {
      // browser tab thumbnail
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'mishap.com',
        short_name: 'Mishap Records',
        start_url: '/',
        icon: `${__dirname}/static/rabbit.png`,
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'STRAPI',
        fieldName: 'strapi',
        url:
          process.env.NODE_ENV === 'production'
            ? process.env.STRAPI_URL
            : 'http://localhost:1337/graphql',
      },
    },
  ],
};
