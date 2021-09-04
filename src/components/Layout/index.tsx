import React from 'react';
// import Footer from '../Footer';
// import Header from '../Header';
// import Main from '../Main';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styled-components/defaultTheme';

const Layout = ({ children }: PageProps): JSX.Element => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Layout;
