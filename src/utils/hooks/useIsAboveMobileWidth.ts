import { useEffect, useState } from 'react';
import { theme } from '../../styled-components/utils/defaultTheme';
import removeRemFromString from '../functions/removeRemFromString';

const useIsAboveMobileWidth = (): boolean | undefined => {
  const [isAboveMobile, setIsAboveMobile] = useState<boolean | undefined>(
    undefined,
  );
  const [width, setWidth] = useState(window.innerWidth);
  const mobileBreakpoint = removeRemFromString(theme.breakpoints.medium) * 16;

  useEffect(() => console.log(width), [width]);
  useEffect(() => {
    const handleWindowResize = (): void => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  useEffect(() => {
    if (width > mobileBreakpoint) setIsAboveMobile(true);
    else setIsAboveMobile(false);
  }, [mobileBreakpoint, width]);

  return isAboveMobile;
};

export default useIsAboveMobileWidth;
