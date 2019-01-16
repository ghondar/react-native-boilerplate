import React, { Component } from 'react'
import { NativeRouter, Route, Switch } from 'react-router-native'

import Header from 'containers/header'

import Home from 'containers/home'
import Dashboard from 'containers/dashboard'

class App extends Component {
  render() {
    return (
      <NativeRouter>
        <Switch>
          <Header>
            <Switch>
              <Route component={Home} exact path='/' />
              <Route component={Dashboard} exact path='/dashboard' />
            </Switch>
          </Header>
        </Switch>
      </NativeRouter>
    )
  }
}

export default App
