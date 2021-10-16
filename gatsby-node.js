const { createRemoteFileNode } = require('gatsby-source-filesystem');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { resolve } = require('path');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const { panicOnBuild } = reporter;

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
    if (error) return panicOnBuild('Error while running graphql');
    if (!data || !data.strapi)
      return panicOnBuild('Error while running graphql. No data found');

    const { artists } = data.strapi;

    // Create artist pages
    artists.forEach(({ id, slug }) => {
      const path = `artists/${slug}`;
      const component = resolve(`${__dirname}/src/templates/artist.tsx`);
      const context = { id };
      const pageData = {
        path,
        component,
        context,
      };

      createPage(pageData);
    });
  });
};

// Resolvers add custom fields to graphql schema
exports.createResolvers = async ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const { createNode } = actions;
  const resolvers = {
    STRAPI_UploadFile: {
      imageFile: {
        type: `File`,
        resolve: async ({ url, name }) => {
          if (!url) return null;
          const fileNodeData = {
            url,
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          };
          let result;

          try {
            result = await createRemoteFileNode(fileNodeData);
          } catch (err) {
            console.error(
              `[createResolvers] error in fetching remote image ${url} (${name}):`,
              err,
            );
            throw err;
          }
          return result;
        },
      },
    },
  };

  createResolvers(resolvers);
};
