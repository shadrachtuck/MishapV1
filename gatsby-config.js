const config = require('./config/metaData.js');
const path = require('path');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: config.siteURl,
    title: config.siteTitle,
    description: config.siteDescription,
    author: config.author,
  },

  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-ts`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
        fileName: false, // only use DisplayName
        namespace: 'mishap',
      },
    },

    // {
    //   resolve: 'gatsby-plugin-react-svg',
    //   options: {
    //     rule: {
    //       include: `${__dirname}/src/assets/images/svg`,
    //     },
    //   },
    // },

    // {
    //   // browser tab thumbnail
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: 'colleen-fletcher.com',
    //     short_name: 'Colleen Fletcher',
    //     start_url: '/',
    //     icon: `${__dirname}/static/blue-flower-colleen-fletcher.png`,
    //   },
    // },

    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     path: `${__dirname}/src/assets/images`,
    //   },
    // },

    // TODO: Remove once gatsby-source-strapi is fixed
    // https://forum.strapi.io/t/gatsby-source-strapi-plugin-not-processing-images-in-dynamic-zones/5838/5
    // {
    //   resolve: 'gatsby-source-graphql',
    //   options: {
    //     typeName: 'STRAPI',
    //     fieldName: 'strapi',
    //     url: `${process.env.GRAPHQL_ENDPOINT}`,
    //   },
    // },
  ],
};