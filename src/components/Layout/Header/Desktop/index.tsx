import React from 'react';
import styled from 'styled-components';
import Menu from '../../../Menus/MenuBar';
import { DefaultLayoutProps } from '../../types';
import { HeaderElement } from '../styles';

const DesktopHeader = ({ className }: DefaultLayoutProps): JSX.Element => {
  return (
    <HeaderElement className={className}>
      <Menu color="black" displayHorizontally />
    </HeaderElement>
  );
};

export default styled(DesktopHeader)``;
