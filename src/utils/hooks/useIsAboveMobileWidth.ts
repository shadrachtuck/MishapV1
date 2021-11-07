import { useEffect, useState } from 'react';

const useIsAboveMobileWidth = (): boolean => {
  const [isAboveMobile, setIsAboveMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 1020) setIsAboveMobile(true);
    else setIsAboveMobile(false);
  }, []);

  return isAboveMobile;
};

export default useIsAboveMobileWidth;
