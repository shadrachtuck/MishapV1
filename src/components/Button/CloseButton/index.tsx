import React from 'react';
import styled from 'styled-components';
import { HiddenButton } from '..';
import Times from '../../../assets/svg/times.svg';
import { above } from '../../../styled-components/mixins';

type CloseButtonProps = {
  className?: string;
};

const navigateBack = (): void => window.history.back();

const CloseButton = ({ className }: CloseButtonProps): JSX.Element => {
  return (
    <HiddenButton
      className={className}
      onClick={navigateBack}
      onKeyPress={navigateBack}
    >
      <Times />
    </HiddenButton>
  );
};

export default styled(CloseButton)`
  /* explicitly larger on mobile.
   Allow grid to size on desktop */
  width: 4rem;
  height: 4rem;

  ${above.medium`
    width: auto;
    height: auto;
  `}
`;
