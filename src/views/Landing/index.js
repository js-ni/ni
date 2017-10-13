import React, { PureComponent } from 'react';

import Header from '../../components/Header';
import { Wrapper } from './styles';

class Landing extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Header />
      </Wrapper>
    );
  }
}

export default Landing;
