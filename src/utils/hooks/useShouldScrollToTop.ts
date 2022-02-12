import { useState, useEffect } from 'react';

const useShouldScrollToTop = (): boolean => {
  const [shouldScrollTop, setShouldScrollTop] = useState(false);

  useEffect(() => {
    const onScrollListener = (): void => {
      if (window.pageYOffset > 300) {
        setShouldScrollTop(true);
      } else {
        setShouldScrollTop(false);
      }
    };

    window.addEventListener('scroll', onScrollListener);
  }, []);

  return shouldScrollTop;
};

export default useShouldScrollToTop;
