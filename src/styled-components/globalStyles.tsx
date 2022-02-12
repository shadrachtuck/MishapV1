// import styled identifier for prettier to know how to format/lint
import * as styled from 'styled-components';
import reset from './config/reset';
import typography from './config/typeography';

const GlobalStyles = styled.createGlobalStyle`
  ${reset}
  ${typography}
`;

export default GlobalStyles;
