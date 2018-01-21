import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import {createHashHistory} from 'history'
import WaldoPizza from './pages/WaldoPizza';

const history = createHashHistory()

const Routes = ({updateRoute}: Props) => (
  <Router history={history} >
    <Route path='/' component={WaldoPizza} />
  </Router>
);

export default Routes;
