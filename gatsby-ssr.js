const React = require('react');
const Layout = require('./src/components/Layout');

exports.wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);
