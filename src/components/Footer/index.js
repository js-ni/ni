import React, { PureComponent } from 'react';

import { Container, Copyright, Domain, Logo } from './styles';

class Footer extends PureComponent {
  render() {
    return (
      <Container>
        <Copyright>Comunidad de desarrolladores JavaScript de Nicaragua</Copyright>
        <Domain href="http://js.org" target="_blank" title="JS.ORG | JavaScript Community">
          <Logo src="https://logo.js.org/bright_horz.png" width="102" alt="JS.ORG Logo"/>
        </Domain>
      </Container>
    );
  }
}

export default Footer;
