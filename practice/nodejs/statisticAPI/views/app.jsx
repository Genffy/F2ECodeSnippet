import React, {Component} from 'react'
import {render} from 'react-dom'
import {Router, Route, Redirect, Link} from 'react-router-dom'
import createHashHistory from 'history/createHashHistory'

import Index from './index'

class App extends Component {
    constructor(props) {
        super(props)
        this.history = new createHashHistory()
    }
    render() {
        return (
            <Router history={this.history}>
                <div>
                    <Route path='/' component={Index}/>
                </div>
            </Router>
        )
    }
}
render( <App/>, document.getElementById('app'))