import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styled-components/defaultTheme';
import GlobalStyles from '../../styled-components/globalStyles';
import useIsAboveMobileWidth from '../../utils/hooks/useIsAboveMobileWidth';
import MainContent from '../Sections/MainContent';
import Footer from './Footer';
import Header from './Header';
import LeftSidebar from './Sidebar/LeftSidebar';
import RightSidebar from './Sidebar/RightSidebar';
import { SiteLayout } from './styles';

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
          {/* 'children' will always either come from a 'page' or a 'template' */}
          {children}
        </MainContent>

        <Footer />

        {isAboveMobile && <RightSidebar />}
      </SiteLayout>
    </ThemeProvider>
  );
};

export default Layout;
