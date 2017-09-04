import React, { PureComponent } from 'react';

import SignUpForm from '../../components/SignUpForm';

import { Form, Title, Wrapper } from './styles';

class SignUp extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Title>Sign up</Title>

        <Form>
          <SignUpForm />
        </Form>
      </Wrapper>
    );
  }
}

export default SignUp;
