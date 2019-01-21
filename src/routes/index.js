import React, { Component } from 'react'
import { NativeRouter, Route, Switch, Redirect } from 'react-router-native'

import Header from 'containers/header'

import Home from 'containers/home'
import Detail from 'containers/detail'
import Dashboard from 'containers/dashboard'

class App extends Component {
  render() {
    return (
      <NativeRouter>
        <Switch>
          <Header>
            <Switch>
              <Redirect
                exact path='/' strict
                to='/home' />
              <Route component={Home} exact path='/home' />
              <Route component={Detail} exact path='/home/detail' />
              <Route component={Dashboard} exact path='/dashboard' />
            </Switch>
          </Header>
        </Switch>
      </NativeRouter>
    )
  }
}

export default App
