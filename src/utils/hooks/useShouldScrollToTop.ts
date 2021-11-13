import { useState, useEffect } from 'react';

const useShouldScrollToTop = (): boolean => {
  const [shouldScrollTop, setShouldScrollTop] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        setShouldScrollTop(true);
      } else {
        setShouldScrollTop(false);
      }
    });
  }, []);

  return shouldScrollTop;
};

export default useShouldScrollToTop;
