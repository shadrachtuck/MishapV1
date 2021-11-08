import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../styled-components/defaultTheme';
import GlobalStyles from '../../styled-components/globalStyles';
import { above } from '../../styled-components/mixins';
import useIsAboveMobileWidth from '../../utils/hooks/useIsAboveMobileWidth';
import MainContent from '../Sections/MainContent';
import Footer from './Footer';
import Header from './Header';
import { HeaderElement } from './Header/styles';
import LeftSidebar from './Sidebar/LeftSidebar';
import { LeftSidebarWrapper } from './Sidebar/LeftSidebar/styles';
import RightSidebar, { RightSidebarElement } from './Sidebar/RightSidebar';
import Subheader from './Subheader';

const SiteLayout = styled.div`
  display: grid;

  grid-template-columns: [main] 1fr;

  ${LeftSidebarWrapper} {
    grid-column: main;
  }

  ${RightSidebarElement} {
    grid-column: main;
  }

  ${HeaderElement} {
    grid-column: main;
  }

  ${MainContent} {
    grid-column: main;
  }

  ${Footer} {
    grid-column: main;
  }

  ${above.medium`
    grid-template-rows:
      [header] minmax(6vh, 10vh)
      [main] auto
      [spacer] 2rem
      [footer] auto
      [whitespace-bottom] minmax(6vh, 10vh);

    grid-template-columns:
      [gutter-left] 2%
      [content-left] 8%
      [left-middle-gutter] 1%
      [middle] 78%
      [right-middle-gutter] 1%
      [content-right] 8%
      [gutter-right] 2%;

    ${LeftSidebarWrapper} {
      grid-column: content-left;
      grid-row: header / span footer-end;
    }

    ${RightSidebarElement} {
      grid-column: content-right;
      grid-row: main / span footer-end;
    }

    ${HeaderElement} {
      grid-column: middle / span gutter-right;
      grid-row: header;
    }

    ${MainContent} {
      grid-column: middle;
      grid-row: main;
    }

    ${Footer} {
      grid-column: middle;
      grid-row: footer;
    }
  `}
`;

type LayoutProps = {
  children: Array<JSX.Element> | JSX.Element;
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const isAboveMobile = useIsAboveMobileWidth();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SiteLayout>
        <LeftSidebar />

        <Header />

        <MainContent>
          {isAboveMobile && <Subheader />}

          {/* 'children' will always either come from a 'page' or a 'template' */}
          {children}
        </MainContent>

        <Footer />

        {/* scroll to top */}
        {isAboveMobile && <RightSidebar />}
      </SiteLayout>
    </ThemeProvider>
  );
};

export default Layout;
