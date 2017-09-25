import React          from 'react';
import { render }     from 'react-dom';
import {Router, browserHistory } from 'react-router';
import {Provider} from 'react-redux';
import configureStore from '../store/configureStore';
import {loadGames} from '../actions/gameActions';
import routes           from './routing';

const store = configureStore();
store.dispatch(loadGames());

const rootElement = document.getElementById('app');

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  rootElement );