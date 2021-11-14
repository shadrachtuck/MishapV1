import React from 'react';
import styled, { css } from 'styled-components';
import { HiddenButton } from '..';
import scrollToTop from '../../../utils/functions/scrollToTop';
import Arrow from '../../../assets/svg/arrow.svg';
import { font } from '../../../styled-components/mixins';
import useShouldScrollToTop from '../../../utils/hooks/useShouldScrollToTop';

type ScrollButtonProps = {
  className?: string;
};

const Wrapper = styled.div<{ invertArrow: boolean }>`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;

  /* targeting button element due to an unknown bug breaking other styles when targeting HiddenButton*/
  button {
    font-size: ${font('size', 'sm')};
    text-transform: uppercase;
    margin-bottom: 40px;
    margin-left: 4px;
    transform: rotate(90deg);
  }

  ${({ invertArrow }) =>
    invertArrow &&
    css`
      svg {
        transform: rotate(180deg);
      }
    `}
`;

const ScrollButton = ({ className }: ScrollButtonProps): JSX.Element => {
  const shouldScrollTop = useShouldScrollToTop();

  return (
    <Wrapper invertArrow={shouldScrollTop}>
      <HiddenButton onClick={scrollToTop} className={className}>
        scroll
      </HiddenButton>
      <Arrow />
    </Wrapper>
  );
};

export default styled(ScrollButton)``;
