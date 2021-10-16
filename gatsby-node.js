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

exports.onCreateWebpackConfig = ({ getConfig, actions, stage }) => {
  const existingConfig = getConfig();

  const rules = existingConfig.module.rules.map(rule => {
    if (
      String(rule.test) ===
      String(/\.(ico|svg|jpg|jpeg|png|gif|webp|avif)(\?.*)?$/)
    ) {
      return {
        ...rule,
        exclude: path.resolve(__dirname, './src/assets/icons'),
      };
    }
    return rule;
  });

  actions.replaceWebpackConfig({
    ...existingConfig,
    module: {
      ...existingConfig.module,
      rules,
    },
  });

  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.svg$/,
          include: path.resolve(__dirname, './src/assets/icons'),
          issuer: /\.((j|t)sx?)$/,
          use: {
            loader: require.resolve(`@svgr/webpack`),
            options: {
              titleProp: true,
            },
          },
        },
      ],
    },
    plugins:
      stage === 'build-javascript'
        ? [
            new BundleAnalyzerPlugin({
              analyzerMode: 'static',
              defaultSizes: 'gzip',
              openAnalyzer: false,
              generateStatsFile: true,
            }),
          ]
        : [],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
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
