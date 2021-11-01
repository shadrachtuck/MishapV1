import React from 'react';
import Layout from './src/components/Layout';
// Fonts
import '@fontsource/roboto-mono/variable.css';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
