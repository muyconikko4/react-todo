import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import Todolist from './Todolist'

const App = () => {
    return (
        <div className="app-main">
                <Switch>
                 <Route path="/home">
                    <Home />
                    </Route> 
                 <Route path="/todolist">
                    <Todolist />
                 </Route>
                 <Route path="">
                    <Home />
                 </Route>
               </Switch>
        </div>
    )
}

export default App