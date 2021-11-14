import { useEffect, useState } from 'react';
import { theme } from '../../styled-components/defaultTheme';
import removeRemFromString from '../functions/removeRemFromString';

const useIsAboveMobileWidth = (): boolean => {
  const [isAboveMobile, setIsAboveMobile] = useState(false);
  const mobileBreakpoint = removeRemFromString(theme.breakpoints.medium) * 16;

  useEffect(() => {
    if (window.innerWidth > mobileBreakpoint) setIsAboveMobile(true);
    else setIsAboveMobile(false);

    // only want to run on mount
    /*eslint-disable react-hooks/exhaustive-deps */
  }, []);

  return isAboveMobile;
};

export default useIsAboveMobileWidth;
