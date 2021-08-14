import React from 'react'
import Login from './pages/login'
import About from './pages/about'
import Todo from './pages/todo'

import createHistory from 'history/createHashHistory'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

const history = createHistory()


function Routes() {
  return (
    <Router history={history}>
      <Switch>
          <Route exact path='/' component={Login} />

          {/* <Route path='/home' component={Login} /> */}
          <Route path='/todo' component={Todo} />
          <Route path='/about' component={About} />
      </Switch>
    </Router>
  )
}

export default Routes;
