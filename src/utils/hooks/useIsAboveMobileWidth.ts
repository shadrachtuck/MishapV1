import { useMemo, useState } from 'react';
import { theme } from '../../styled-components/utils/defaultTheme';
import removeRemFromString from '../functions/removeRemFromString';

const isSSR = typeof window === undefined;

const useIsAboveMobileWidth = (): boolean | undefined => {
  const [isAboveMobile, setIsAboveMobile] = useState(false);
  const mobileBreakpoint = removeRemFromString(theme.breakpoints.medium) * 16;

  useMemo(() => {
    if (isSSR) return;
    if (window.innerWidth > mobileBreakpoint) setIsAboveMobile(true);
    else setIsAboveMobile(false);
  }, [mobileBreakpoint]);

  if (isSSR) return;
  if (window.innerWidth === undefined) return;
  if (!mobileBreakpoint) return;
  return isAboveMobile;
};

export default useIsAboveMobileWidth;
