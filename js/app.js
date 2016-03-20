import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
const App = require('components/app');
const NoMatch = require('components/no_match');

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
        <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.getElementById('app'));
