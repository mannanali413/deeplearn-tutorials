import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Tutorials from './Tutorials'
import Tutorial from './Tutorial'

// The Tutorials component matches one of two different routes
// depending on the full pathname
const Tutorials = () => (
  <Switch>
    <Route exact path='/tutorials' component={Tutorials}/>
    <Route path='/tutorials/:number' component={Tutorial}/>
  </Switch>
)

export default Tutorials;
