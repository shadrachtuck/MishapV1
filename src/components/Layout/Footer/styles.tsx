import ContactInformation from '../../../components/Contact/ContactInformation';
import styled from 'styled-components';
import ContactForm from '../../../components/Contact/ContactForm';
import { above, color, pxToRem } from '../../../styled-components/mixins';

export const FooterWrapper = styled.footer`
  ${ContactForm} {
    padding: ${pxToRem(48)};
    background: ${color('black')};
    color: ${color('white')};
  }

  ${above.medium`
    display: grid;
    grid-template-columns: [left] 1fr [right] 1fr;
    justify-content: center;

    ${ContactInformation} {
      padding: ${pxToRem(48)};
      grid-column: left;
    }

    ${ContactForm} {
      padding: ${pxToRem(48)};
      grid-column: right;
    }
  `}
`;
