import { Formik } from 'formik';
import Yup from 'yup';

import environment from '../../relayEnvironment';
import CreateUserMutation from '../../mutations/CreateUserMutation';

export default Formik({
  mapPropsToValues: () => {
    return {
      email: '',
      password: '',
      username: ''
    };
  },

  validationSchema: Yup.object().shape({
    email: Yup.string().email().required('Email is required.'),
    password: Yup.string().required('Password is required.'),
    username: Yup.string().required('Username is required.')
  }),

  handleSubmit: (values) => {
    CreateUserMutation.commit(environment, values);
  }
});
