import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Tutorials from '../tutorials';
import Experiments from '../experiments';

const Main = () => (
    <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/tutorials' component={Tutorials}/>
          <Route path='/experiments' component={Experiments}/>
        </Switch>
    </main>
)

export default Main
