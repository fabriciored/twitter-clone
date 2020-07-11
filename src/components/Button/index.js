import styled from 'styled-components';
import implement, { Interface, type } from 'implement-js';

Interface Props {
    outlined?: boolean;
}
export default styled.button<Props>`
  background: ${props => (props.outlined ? 'transparent' : 'var(--twitter)')};
`;