import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

const ConfigureStore = require('redux/configure_store');
const App = require('components/app');
const NoMatch = require('components/no_match');
const Gallery = require('components/gallery');

require('./../less/all.less');

var reduxStore = ConfigureStore();
render((
    <Provider store={reduxStore}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Gallery}/>
                <Route path="*" component={NoMatch}/>
            </Route>
        </Router>
    </Provider>
), document.getElementById('app'));
