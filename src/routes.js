import { makeRouteConfig, Route } from 'found';
import React from 'react';

import App from './App';

import SignUp from './views/SignUp';
import Landing from './views/Landing';

export default makeRouteConfig(
  <Route Component={App} path="/">
    <Route
        Component={Landing}
    />
    <Route Component={SignUp} path="/user/new" />
  </Route>
);
