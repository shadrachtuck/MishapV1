# Mishap Records

Welcome to the Mishap Records marketing site. Mishap is a record label based in
Boise, Idaho, featuring a diverse range of artists from death metal to hardcore,
alt country to noise rock.

## Project dependencies

### Gatsby

This site is built with Gatsby and Yarn. Gatsby is a hybrid static site
generator with server-side rendering. The frontend application listens for data
incoming from a headless css API as well as integration with the Stripe API.

### Eslint and Prettier

We use Eslint and Prettier to ensure consistent code formatting. This speeds up
the development process by catching potential bugs and enabling auto-formatting.

### Styled-Components

[Styled-components](https://styled-components.com/docs) is a css-in-js library
with builtin sass-like syntax.

## Development

Before you start the development server, ensure you are running the
[Strap cms](https://github.com/shadrachtuck/MishapApi#strapi-application) on
port `1337`. This is the API that houses all artist data.

To start the development server, run `yarn start`. This will open up a web page
on port `3000`.

### Gatsby build

If you need a production build of the site (example, for testing xml generated
only on a production build), you may run `yarn build`. Under the hood, this runs
gatsby build, which you can read more about
[HERE](https://www.gatsbyjs.com/docs/glossary/build/#what-is-a-build)

To create a real production build, simply run the command above. However, you
must first create a `.env.production` file in your root folder. Our strapi API
relies on a /graphql REST endpoint for all of its data. Since Gatsby Build sets
`NODE_ENV` to `'production'`, you will need `STRAPI_URL` in your env to pull
from the right source. Note, this may point to `http://localhost:1337/graphql`
for testing or a deployed instance of Strapi.

```
STRAPI_URL=example.site/graphql
```

### Writing Graphql queries

If you are querying data from the strapi cms, to find out how to write custom
sort/filer queries in your graphql, check out the
[STRAPI DOCS](https://strapi.io/documentation/developer-docs/latest/development/plugins/graphql.html#query-api)
