const { createRemoteFileNode } = require('gatsby-source-filesystem');
const path = require('path');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  await graphql(`
    query {
      strapi {
        artists {
          id
          slug
          name
        }
      }
    }
  `).then(({ error, data }) => {
    if (error) return reporter.panicOnBuild(`Error while running graphql`);

    // Create artist pages
    data.strapi.artists.forEach(({ id, slug }) => {
      const pageData = {
        path: `artists/${slug}`,
        component: path.resolve(`${__dirname}/src/templates/artist.tsx`),
        context: { id },
      };
      createPage(pageData);
    });
  });
};
