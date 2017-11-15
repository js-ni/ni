import { injectGlobal } from 'emotion';
import styled from 'react-emotion';

injectGlobal`
  body {
    background-color: #f5f6f7 !important;
  }
`;

export const Box = styled('div')`
  margin-bottom: 40px;

  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, .05);
  overflow: hidden;
`;

export const Market = styled('div')`
  align-items: center;
  display: flex;
  height: 20px;
  justify-content: center;
  padding: 8px;
  width: 20px;

  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, .35);
  color: #e5bb31;
  cursor: pointer;
`;

export const Title = styled('h1')`
  margin-top: 30px;

  font-size: 18px;

  color: #4a4a4a;
`;

export const List = styled('div')`
`;

export const ListTitle = styled('h2')`
  border-bottom: 1px solid #f1f1f1;
  margin: 0;
  padding: 20px;

  font-size: 16px;
`;
