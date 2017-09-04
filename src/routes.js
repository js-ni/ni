import { makeRouteConfig, Route } from 'found';
import React from 'react';

import App from './App';

import SignUp from './views/SignUp';

export default makeRouteConfig(
  <Route Component={App} path="/">
    <Route Component={SignUp} path="/user/new" />
  </Route>
);
