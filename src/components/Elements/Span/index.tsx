import styled from 'styled-components';
import { font } from '../../../styled-components/utils/mixins';
type Props = {
  size?: 'huge' | 'large' | 'normal' | 'small';
};

// Mostly used to intercept custom Quill.js classNames and apply styles via styled-components
export default styled.span<Props>`
  font-size: ${props => {
    switch (props.size) {
      case 'huge':
        return font('size', 'xl');

      case 'large':
        return font('size', 'lg');

      case 'normal':
        return font('size', 'base');

      case 'small':
        return font('size', 'sm');

      default:
        return 'inherit';
    }
  }};
`;
