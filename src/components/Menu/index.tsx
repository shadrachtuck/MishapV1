import React from 'react';
import styled from 'styled-components';
import { pxToRem } from '../../styled-components/mixins';

type MenuItem = {
  id: number;
  name: string;
  href?: string;
};

type MenuItems = Array<MenuItem>;

const menuItems: MenuItems = [
  {
    id: 1,
    name: 'artists',
  },
  {
    id: 2,
    name: 'contact',
  },
  {
    id: 3,
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
        {menuItems.map(({ id, name, href }) => (
          <li key={id}>
            <a href={`/${href || name}`}>{name}</a>
          </li>
        ))}
      </ul>
    </Navbar>
  );
};

export default Menu;
