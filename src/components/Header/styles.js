import styled from 'react-emotion';

export const Nav = styled.div`
  background: #e5bb31;
  height: 94px;
  line-height: 94px;
  padding: 0 20px;
  position: relative;
  overflow: hidden;
`;

export const Container = styled.div`
  margin: 0 20px;
`;

export const Logo = styled.img`

`;

export const Navigation = styled.div`
  float: right;
`;

export const Item = styled.a`
  border-bottom: 2px solid #e5bb31;
  position: relative;
  text-decoration: none;
  margin-right: 40px;
  color: #ffffff;
  font-weight: 600;

  &:hover {
    text-decoration: none;
    border-bottom-color:#fff;
    color:#fff;
  }

  &:last-child {
    margin-right: 0;
  }
`;
