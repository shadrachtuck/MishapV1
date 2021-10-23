import React from 'react';
import styled from 'styled-components';
import Times from '../../../assets/svg/times.svg';

type CloseButtonProps = {
  className?: string;
};

export const HiddenButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  background: transparent;
  svg {
    width: 65%;
    height: 65%;
  }
`;

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
