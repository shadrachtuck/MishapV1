import { useEffect, useState } from 'react';
import { theme } from '../../styled-components/utils/defaultTheme';
import removeRemFromString from '../functions/removeRemFromString';

const isSSR = typeof window === undefined;

const useIsAboveMobileWidth = (): boolean | undefined => {
  const [isAboveMobile, setIsAboveMobile] = useState<boolean | undefined>(
    undefined,
  );
  const [width, setWidth] = useState<number | undefined>(undefined);
  const mobileBreakpoint = removeRemFromString(theme.breakpoints.medium) * 16;

  useEffect(() => {
    if (!isSSR) {
      setWidth(window.innerWidth);
      const handleWindowResize = (): void => setWidth(window.innerWidth);
      window.addEventListener('resize', handleWindowResize);
      return () => window.removeEventListener('resize', handleWindowResize);
    }
  }, []);

  useEffect(() => {
    if (width && width >= mobileBreakpoint) setIsAboveMobile(true);
    else setIsAboveMobile(false);
  }, [mobileBreakpoint, width]);

  if (width === undefined) return undefined;
  return isAboveMobile;
};

export default useIsAboveMobileWidth;
