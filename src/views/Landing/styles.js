import { injectGlobal } from 'emotion';
import styled from 'react-emotion';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    background-color: #46483E !important;
  }
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
`;

export const Title = styled.div`
  margin: 30px auto;
  color: #FFFFFF;
  text-transform: uppercase;
  font-size: 24px;
`;

export const Image = styled.img`
  
`;
