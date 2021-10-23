/**
 * This component allows styled-components `props`
 * to be passed as a prop into another component.
 * This comes in handy when accessing defaultTheme
 * values from outside of a styled-component.
 */

import React from 'react';
import { withTheme } from 'styled-components';

// TODO: write proper type declaration for children
const ThemeWrapper = ({ children }: any): JSX.Element => {
  return <>{children}</>;
};

export default withTheme(ThemeWrapper);
