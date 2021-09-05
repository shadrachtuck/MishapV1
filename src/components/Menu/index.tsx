import React from 'react';
import styled from 'styled-components';
import { pxToRem } from '../../styled-components/mixins';

type MenuItem = {
  name: string;
  href?: string;
};

type MenuItems = Array<MenuItem>;

const menuItems: MenuItems = [
  {
    name: 'artists',
  },
  {
    name: 'contact',
  },
  {
    name: 'store',
  },
];

const Navbar = styled.nav`
  ul {
    display: flex;
    gap: ${pxToRem(50)};
  }
`;

const Menu = (): JSX.Element => {
  return (
    <Navbar>
      <ul>
        {menuItems.map(({ name, href }) => (
          <li>
            <a href={`/${href || name}`}>{name}</a>
          </li>
        ))}
      </ul>
    </Navbar>
  );
};

export default Menu;
