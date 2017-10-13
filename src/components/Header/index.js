import React, { PureComponent } from 'react';

import { Nav, Container, Logo, Navigation, Item } from './styles';

class Header extends PureComponent {
  render() {
    return (
      <Nav>
        <Container>
          <Logo src="https://www.javascript.com/images/pages/shared/logo.svg" alt="Logo Comunidad JavaScript Nicaragua" />
          <Navigation>
            <Item href="/learn">Aprende</Item>
            <Item href="/news">Noticias</Item>
            <Item href="/resources">Recursos</Item>
          </Navigation>
        </Container>
      </Nav>
    );
  }
}

export default Header;
