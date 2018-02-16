import React from 'react';

import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';

import FrontPage from './Pages/FrontPage';

const routes = [{
  component: FrontPage,
}];

const Router = () => (
  <BrowserRouter>
    {renderRoutes(routes)}
  </BrowserRouter>
);

export default Router;
