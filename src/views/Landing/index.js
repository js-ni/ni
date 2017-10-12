import React, { PureComponent } from 'react';

//import SignUpForm from '../../components/SignUpForm';
import { Image, Title, Wrapper } from './styles';

class Landing extends PureComponent {
  render() {
    return (
        <Wrapper>
        <Title>Comunidad JavaScript de Nicaragua</Title>

        <Image src="/images/442a002e-c85e-11e5-8085-4f1f076394e7.png" alt="Comunidad JavaScript de Nicaragua" />
      </Wrapper>
    );
  }
}

export default Landing;
