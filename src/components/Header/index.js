import React, { PureComponent } from 'react';

import { Nav, Container, Logo, Navigation, Item } from './styles';

class Header extends PureComponent {
  render() {
    return (
      <Nav>
        <Container>
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
