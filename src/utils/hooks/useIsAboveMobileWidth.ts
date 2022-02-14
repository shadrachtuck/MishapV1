import { useEffect, useState } from 'react';
import { theme } from '../../styled-components/utils/defaultTheme';
import removeRemFromString from '../functions/removeRemFromString';

const isSSR = typeof window === undefined;

const useIsAboveMobileWidth = (): boolean | undefined => {
  const [isAboveMobile, setIsAboveMobile] = useState(false);
  const mobileBreakpoint = removeRemFromString(theme.breakpoints.medium) * 16;

  // TODO: Possibly remove the isSSR checks now that 'window' calls are used in useEffect hook
  useEffect(() => {
    if (!isSSR) {
      if (typeof window !== undefined && window.innerWidth > mobileBreakpoint)
        setIsAboveMobile(true);
      else setIsAboveMobile(false);
    }
  }, [mobileBreakpoint]);

  if (!mobileBreakpoint) return;
  return isAboveMobile;
};

export default useIsAboveMobileWidth;
