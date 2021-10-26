import React from 'react';
import Layout from './src/components/Layout';

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);

// Fonts
import '@fontsource/roboto-mono/variable.css';
