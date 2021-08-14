import React from 'react'
import App from './App'
import Login from './pages/login'
import About from './pages/about'
import Todo from './pages/todo'

import createHistory from 'history/createBrowserHistory'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function Routes() {
  return (
    <Router>
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
