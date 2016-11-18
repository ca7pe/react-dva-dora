import React, { PropTypes } from 'react';
import { Router, Route, Redirect, IndexRoute, Link } from 'dva/router';
import IndexPage from './routes/IndexPage';

export default function({ history }) {
  return (
    <Router history={history}>
      <Redirect from="/" to="/game" />
      <Route path="/game" component={IndexPage} />
      <Route path="/hotupdate/:appCode/:plat" component={IndexPage} />
      <Route path="/channel/:appCode/:plat" component={IndexPage} />
      <Route path="/manifest/:appCode/:plat" component={IndexPage} />
    </Router>
  );
};