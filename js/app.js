import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
const App = require('components/app');
const NoMatch = require('components/no_match');
const Gallery = require('components/gallery');
require('./../less/all.less');

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={Gallery}/>
        <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.getElementById('app'));
