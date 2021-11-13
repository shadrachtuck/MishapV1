import React from 'react';
import { ScrollButton } from '../../../Button/';
import useShouldScrollToTop from '../../../../utils/hooks/useShouldScrollToTop';
import HamburgerMenu from '../../../Menus/HamburgerMenu';
import { RightSidebarElement } from './styles';

const RightSidebar = (): JSX.Element => {
  const shouldScrollTop = useShouldScrollToTop();

  return (
    <RightSidebarElement>
      {shouldScrollTop && <HamburgerMenu />}
      <ScrollButton />
    </RightSidebarElement>
  );
};

export default RightSidebar;
