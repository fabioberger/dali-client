import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
var App = require('components/app');
var NoMatch = require('components/no_match');
var Gallery = require('components/gallery');

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={Gallery}/>
        <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.getElementById('app'));
