import React, { PureComponent } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Wrapper } from './styles';

class Landing extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Header />
        <Footer />
      </Wrapper>
    );
  }
}

export default Landing;
