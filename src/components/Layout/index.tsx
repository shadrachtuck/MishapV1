import React from 'react';
import Header, { HeaderElement } from './Header';
import LeftSidebar, { SidebarElement } from './Sidebar';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../styled-components/defaultTheme';
import GlobalStyles from '../../styled-components/global-styles';
import MainContent from '../Sections/MainContent';
import { PageProps } from 'gatsby';

const SiteLayout = styled.div`
  display: grid;
  grid-template-columns: [left] 10% [middle] 80% [right] 10%;
  grid-template-rows: [header] 5vh [right-spacer] 2rem [content] auto [left-spacer] 2rem [footer] auto;

  ${SidebarElement} {
    grid-column: left;
    grid-row: header / span footer-end;
  }

  ${HeaderElement} {
    grid-column: middle / span right-end;
    grid-row: header / span right-spacer;
  }

  ${MainContent} {
    grid-column: middle;
    grid-row: content;
  }
`;

type LayoutProps = Omit<PageProps, 'children'> & {
  children: Array<JSX.Element>;
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <SiteLayout>
        <LeftSidebar />

        <Header />

        <MainContent>{children}</MainContent>
      </SiteLayout>
    </ThemeProvider>
  );
};

export default Layout;
