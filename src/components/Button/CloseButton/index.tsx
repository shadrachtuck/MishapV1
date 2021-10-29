import React from 'react';
import styled from 'styled-components';
import { HiddenButton } from '..';
import Times from '../../../assets/svg/times.svg';

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

export default styled(CloseButton)``;
