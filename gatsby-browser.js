import React from 'react';
import Layout from './src/components/Layout';
// Fonts
import '@fontsource/roboto-mono/variable.css';

const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);

export default wrapPageElement;
