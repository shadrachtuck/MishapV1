import React from 'react';
import ScrollButton from '../../../Buttons/ScrollButton';
import styled from 'styled-components';

export const RightSidebarElement = styled.aside`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-end;

  position: sticky;
  height: 100vh;
  top: 0;
  left: 0;
`;

const RightSidebar = (): JSX.Element => {
  return (
    <RightSidebarElement>
      <ScrollButton />
    </RightSidebarElement>
  );
};

export default RightSidebar;
