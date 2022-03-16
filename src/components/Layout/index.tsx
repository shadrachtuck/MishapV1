import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styled-components/utils/defaultTheme';
import GlobalStyles from '../../styled-components/globalStyles';
import useIsAboveMobileWidth from '../../utils/hooks/useIsAboveMobileWidth';
import MainContent from '../Sections/MainContent';
import { DesktopFooter, MobileFooter } from './Footer';
import { DesktopHeader, MobileHeader } from './Header';
import LeftSidebar from './Sidebar/LeftSidebar';
import RightSidebar from './Sidebar/RightSidebar';
import { SiteLayout } from './styles';

type LayoutProps = {
  children: Array<JSX.Element> | JSX.Element;
};

// TODO: Extract into own page?
const Main = ({ children }: LayoutProps): JSX.Element => (
  <MainContent>
    {/* 'children' will always either come from a 'page' or a 'template' */}
    {children}
  </MainContent>
);

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const isAboveMobile = useIsAboveMobileWidth();

  if (isAboveMobile === undefined) return <></>; // prevent layout shift

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SiteLayout>
        {isAboveMobile ? (
          <Fragment>
            <LeftSidebar />
            <DesktopHeader />
            <Main>{children}</Main>
            <DesktopFooter />
            <RightSidebar />
          </Fragment>
        ) : (
          <Fragment>
            <MobileHeader />
            <Main>{children}</Main>
            <MobileFooter />
          </Fragment>
        )}
      </SiteLayout>
    </ThemeProvider>
  );
};

export default Layout;
