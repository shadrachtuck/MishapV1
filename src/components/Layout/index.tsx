import React, { createContext } from 'react';
import Header, { HeaderElement } from './Header';
import LeftSidebar, { SidebarElement } from './Sidebar';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../styled-components/defaultTheme';
import GlobalStyles from '../../styled-components/globalStyles';
import MainContent from '../Sections/MainContent';
import ThemeWrapper from '../ThemeWrapper';
import Footer from './Footer';

const SiteLayout = styled.div`
  display: grid;

  grid-template-columns:
    [gutter-left] 2%
    [content-left] 8%
    [middle] 80%
    [content-right] 8%
    [gutter-right] 2%;

  grid-template-rows:
    [header] minmax(6vh, 10vh)
    [top-spacer] 2rem
    [content] auto
    [bottom-spacer] 2rem
    [footer] auto
    [whitespace-bottom] minmax(6vh, 10vh);

  ${SidebarElement} {
    grid-column: content-left;
    grid-row: header / span footer-end;
  }

  ${HeaderElement} {
    grid-column: middle;
    grid-row: header / span top-spacer;
  }

  ${MainContent} {
    grid-column: middle;
    grid-row: content;
  }

  ${Footer} {
    grid-column: middle;
    grid-row: footer;
  }
`;

type LayoutProps = {
  children: Array<JSX.Element> | JSX.Element;
  location: Location;
  // TODO: find locale type
  pageContext: { locale: any };
};

export const LocaleContext = createContext({});

const Layout = ({
  children,
  pageContext: { locale },
}: LayoutProps): JSX.Element => (
  <LocaleContext.Provider value={locale}>
    <ThemeProvider theme={theme}>
      <ThemeWrapper>
        <GlobalStyles />
        <SiteLayout>
          <LeftSidebar />

          <Header />

          {/* 'children' will always either come from a 'page' or a 'template' */}
          <MainContent>{children}</MainContent>

          <Footer />
        </SiteLayout>
      </ThemeWrapper>
    </ThemeProvider>
  </LocaleContext.Provider>
);

export default Layout;
