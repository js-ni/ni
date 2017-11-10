import { BrowserProtocol, queryMiddleware } from 'farce';
import { createFarceRouter, createRender } from 'found';
import { Resolver } from 'found-relay';
import React from 'react';
import ReactDOM from 'react-dom';

import './icons';
import registerServiceWorker from './registerServiceWorker';
import environment from './relayEnvironment';
import routes from './routes';

import 'sanitize.css/sanitize.css';
import 'bootstrap/dist/css/bootstrap.css';

const Router = createFarceRouter({
  historyMiddlewares: [queryMiddleware],
  historyProtocol: new BrowserProtocol(),
  render: createRender({}),
  routeConfig: routes,
});

ReactDOM.render(
  <Router resolver={new Resolver(environment)} />,
  document.getElementById('root')
);

registerServiceWorker();
