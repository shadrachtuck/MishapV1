import styled, { DefaultTheme } from 'styled-components';
import { color } from '../../../styled-components/utils/mixins';

type InputProps = {
  backgroundTheme?: keyof DefaultTheme['colors'];
};

export const Input = styled.input<InputProps>`
  background: ${({ backgroundTheme = 'black' }) => color(backgroundTheme)};
  color: ${({ backgroundTheme = 'black' }) =>
    color(backgroundTheme === 'black' ? 'white' : 'black')};
  border-bottom: 1px solid
    ${({ backgroundTheme = 'black' }) =>
      color(backgroundTheme === 'black' ? 'white' : 'black')};
  width: 100%;
`;

export const Label = styled.label``;

export const InputSection = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
`;

export const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  gap: 3rem;

  h2 {
    align-self: center;
  }
`;
