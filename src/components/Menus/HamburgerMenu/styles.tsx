import styled from 'styled-components';
import { color, padding, timing } from '../../../styled-components/mixins';
import { HiddenButton } from '../../Button';

export const MenuLabel = styled(HiddenButton)`
  height: 3rem;
  width: 3rem;
  cursor: pointer;
  text-align: center;
`;

type ClickableProps = {
  isClicked: boolean;
};

export const Icon = styled.span<ClickableProps>`
  display: inline-block;
  background-color: ${({ isClicked }) => (isClicked ? 'transparent' : 'black')};
  width: 3rem;
  height: 2px;
  position: relative;
  transition: all ${timing('fast')};

  &::before,
  &::after {
    content: '';
    background-color: ${({ isClicked }) =>
      isClicked ? color('white') : color('black')};
    width: 3rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }

  &::before {
    top: ${({ isClicked }) => (isClicked ? '0' : '-0.8rem')};
    transform: ${({ isClicked }) =>
      isClicked ? 'rotate(135deg)' : 'rotate(0)'};
  }

  &::after {
    top: ${({ isClicked }) => (isClicked ? '0' : '0.8rem')};
    transform: ${({ isClicked }) =>
      isClicked ? 'rotate(-135deg)' : 'rotate(0)'};
  }
`;

export const MobileMenu = styled.nav<ClickableProps>`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  padding: ${padding('medium')};
  gap: 1rem;
  background: ${color('black')};
  color: ${color('white')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  opacity: ${({ isClicked }) => (isClicked ? 1 : 0)};
  transition: ${timing('medium')};
  transform: ${({ isClicked }) =>
    isClicked ? 'translateY(0%)' : 'translateY(100%)'};
`;
