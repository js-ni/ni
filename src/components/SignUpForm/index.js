import React, { PureComponent } from 'react';

import Input from '../Input';

import withFormik from './formik';
import { Button } from './styles';

class SignUp extends PureComponent {
  render () {
    const { errors, handleChange, handleSubmit, touched, values } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <Input
          autoFocus
          required
          errorMessage={touched.username && errors.username}
          label="Username"
          name="username"
          onChange={handleChange}
          type="text"
          value={values.username}
        />
        <Input
          required
          errorMessage={touched.email && errors.email}
          label="Email"
          name="email"
          onChange={handleChange}
          type="email"
          value={values.email}
        />
        <Input
          required
          errorMessage={touched.password && errors.password}
          label="Password"
          name="password"
          onChange={handleChange}
          type="password"
          value={values.password}
        />

        <Button>Submit</Button>
      </form>
    );
  }
}

export default withFormik(SignUp);
