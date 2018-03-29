import React, { Component } from 'react';
import styled from 'styled-components';

class Footer extends Component {
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

const Container = styled.div`
  background-color: #273531;
  height: 120px;
  line-height: 120px;
  padding: 0 20px;
`;

const Copyright = styled.span`
  color: #6d7d79;
`;

const Domain = styled.a`
  float: right;
`;

const Logo = styled.img`
`;

export default Footer;
