import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { HiddenButton } from '..';

type ScrollButtonProps = {
  className?: string;
};

const ScrollButton = ({ className }: ScrollButtonProps): JSX.Element => {
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

  const handleScrollToTop = (): void => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {shouldScrollTop && (
        <HiddenButton onClick={handleScrollToTop} className={className}>
          scroll to top
        </HiddenButton>
      )}
    </>
  );
};

export default styled(ScrollButton)``;
