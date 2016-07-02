import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'
import {Router, Route, IndexRoute, browserHistory, Redirect} from 'react-router';
import promise from 'redux-promise';

import reducers from './reducers';
import routes from './routes';

import './sass/style.scss';

const createStoreWithMiddleware = applyMiddleware(logger(), promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>
  , document.querySelector('#blog'))
