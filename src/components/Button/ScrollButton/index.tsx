import React from 'react';
import styled from 'styled-components';
import { HiddenButton } from '..';
import scrollToTop from '../../../utils/functions/scrollToTop';
import useShouldScrollToTop from '../../../utils/hooks/useShouldScrollToTop';

type ScrollButtonProps = {
  className?: string;
};

const ScrollButton = ({ className }: ScrollButtonProps): JSX.Element => {
  const shouldScrollTop = useShouldScrollToTop();

  return (
    <>
      {shouldScrollTop && (
        <HiddenButton onClick={scrollToTop} className={className}>
          scroll to top
        </HiddenButton>
      )}
    </>
  );
};

export default styled(ScrollButton)``;
