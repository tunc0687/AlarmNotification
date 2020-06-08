import React, { Component } from 'react'
import DisplayHeader from './components/display/DisplayHeader'
import DisplayBody from './components/display/DisplayBody'
import EditAlarm from './components/alarm/EditAlarm'
import DeleteAlarm from './components/alarm/DeleteAlarm'
import SoundAlarm from './components/alarm/SoundAlarm'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <div className="card mt-3 w-35-center">
                            <DisplayHeader />
                            <DisplayBody />
                        </div>
                    </Route>
                    <Route exact path="/add">
                        <EditAlarm />
                    </Route>
                    <Route exact path="/delete">
                        <div className="card mt-3 w-35-center">
                            <DisplayHeader />
                            <DeleteAlarm />
                        </div>
                    </Route>
                    <Route exact path="/play">
                        <SoundAlarm />
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App
