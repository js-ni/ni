import React, { PureComponent } from 'react';

import { Nav, Container, Title, SubTitle } from './styles';

class Header extends PureComponent {
  render() {
    return (
      <Nav>
        <Container>
          <Title>Comunidad JavaScript de Nicaragua</Title>
          <SubTitle>Encuentro JavaScripters + pizza.</SubTitle>
          {/*
          <Navigation>
            <Item href="/learn">Aprende</Item>
            <Item href="/news">Noticias</Item>
            <Item href="/resources">Recursos</Item>
            <Item href="/events">Eventos</Item>
          </Navigation>
          */}
        </Container>
      </Nav>
    );
  }
}

export default Header;
