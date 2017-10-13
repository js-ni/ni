import { makeRouteConfig, Route } from 'found';
import React from 'react';

import App from './App';

import SignUp from './views/SignUp';
import Landing from './views/Landing';
import Events from './views/Events';

export default makeRouteConfig(
  <Route Component={App} path="/">
    <Route
        Component={Landing}
    />
    <Route Component={SignUp} path="/user/new" />

    <Route Component={Events} path="/events" />
  </Route>
);
