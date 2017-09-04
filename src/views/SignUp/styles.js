import { injectGlobal } from 'emotion';
import styled from 'react-emotion';

injectGlobal`
  body {
    background-color: #e1e1e1 !important;
  }
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 420px;
`;

export const Title = styled.div`
  margin: 30px 0;

  color: #acbcbc;
  text-transform: uppercase;
`;

export const Form = styled.div`
  padding: 30px;

  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, .15);
`;
