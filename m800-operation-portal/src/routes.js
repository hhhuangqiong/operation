import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import ViewPage from './containers/ViewPage';
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ViewPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
