import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from '../containers/Home'
import DevDetails from '../containers/DevDetails'

export default props => (
    <Switch>
        <Route exact path={'/'} render={() => (
            <Home />
        )} />

        <Route exact path={'/dev/:username'} render={() => (
            <DevDetails  />
        )} />

        <Redirect from="*" to="/" />
    </Switch>
)