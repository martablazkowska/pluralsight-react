import React, {Component}          from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import GamesPage from './components/games/GamesPage';
import NoMatch from './components/common/NoMatch';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="games" component={GamesPage} />
    <Route path="about" component={AboutPage} />
    <Route path="*" component={NoMatch} />
  </Route>
)