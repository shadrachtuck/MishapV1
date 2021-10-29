import React from 'react';
import styled from 'styled-components';
import { pxToRem } from '../../styled-components/mixins';
import { routes } from '../../../config';
import isExternalLink from '../../utils/isExternalLink';

type MenuItem = {
  id: number;
  name: string;
  href: string;
};

type MenuItems = Array<MenuItem>;

const menuItems: MenuItems = [
  {
    id: 1,
    name: 'artists',
    href: routes.artists,
  },
  {
    id: 2,
    name: 'contact',
    href: routes.contact,
  },
  {
    id: 3,
    name: 'store',
    href: routes.store,
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
            {/* safely add # to non-external links by default 
                because this is a single-page site */}
            {isExternalLink(href) ? (
              <a href={href} target="_blank" rel="noreferrer">
                {name}
              </a>
            ) : (
              <a href={`/#${href}`}>{name}</a>
            )}
          </li>
        ))}
      </ul>
    </Navbar>
  );
};

export default Menu;
