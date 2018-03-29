import React, { Component } from 'react';
import styled from 'styled-components';

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Title>Comunidad JavaScript de Nicaragua</Title>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  position: relative;
  background-color: #f7df1f;
  border-bottom: 1px solid #bdbdbd;
  text-align: center;
`;

const Title = styled.h1`
  color: #2d2d2d;
  font-weight: normal;
  font-size: 26px;
  padding: 20px;
  font-weight: bold;
`;

export default Header;
