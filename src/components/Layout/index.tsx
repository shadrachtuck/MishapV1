import React from 'react';
import Footer, { FooterElement } from './Footer';
import Header, { HeaderElement } from './Header';
import Sidebar, { SidebarElement } from './Sidebar';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../styled-components/defaultTheme';
import GlobalStyles from '../../styled-components/global-styles';

const MainContent = styled.div`
  display: grid;
  grid-template-columns: [left] 10% [right] 90%;
  grid-template-rows: [header] auto [content] auto [footer] auto;

  ${HeaderElement} {
    grid-column: right;
    grid-row: header;
  }

  ${SidebarElement} {
    grid-column: left;
    grid-row: header / span footer-end;
  }

  ${FooterElement} {
    grid-column: right;
    grid-row: footer;
  }
`;

const Layout = ({ children }: PageProps): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainContent>
        <Sidebar />
        <Header />
        <main>{children}</main>
        <Footer />
      </MainContent>
    </ThemeProvider>
  );
};

export default Layout;
