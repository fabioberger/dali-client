import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
var App = require('components/app');
var NoMatch = require('components/no_match');

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
        <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.getElementById('app'));
