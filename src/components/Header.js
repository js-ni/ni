import React, { Component } from 'react';
import styled from 'styled-components';
import LogoImage from './logo.png';

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Logo width="32" height="32" src={LogoImage} alt="JavaScript Nicaragua" />
        <Title>JavaScript Nicaragua</Title>
        <Navigation>
          <Item>
            <Link href="#">Inicio</Link>
          </Item>
          <Item>
            <Link href="#">Eventos</Link>
          </Item>
          <Item>
            <Link href="#">Blog</Link>
          </Item>
          <Item>
            <Link href="#">Proyectos</Link>
          </Item>
        </Navigation>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  height: 48px;
  padding: 0 24px;
  position: relative;
  background-color: #ffffff;
  border-bottom: 1px solid #bdbdbd;
  line-height: 48px;
`;

const Title = styled.h1`
  color: #757575;
  font-weight: normal;
  font-size: 26px;
  font-family: 'PT Sans Narrow', sans-serif;
  margin: 0;
  padding: 0;
`;

const Logo = styled.img`
  margin-top: 8px;
  margin-right: 10px;
`;

const Navigation = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  margin-left: 40px;
`;

const Item = styled.li`
  float: left;
`;

const Link = styled.a`
  text-decoration: none;
  float: left;
  color: rgba(0,0,0,.54);
  font-weight: 400;
  text-transform: none;
  padding: 0 24px;
`;

export default Header;
