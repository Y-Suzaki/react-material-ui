import React from 'react';
import {Switch} from "react-router-dom";
import { Route, Link, NavLink } from "react-router-dom"
import { push } from "connected-react-router"

import Header from './components/header'
import Footer from './components/footer'
import UpdateContainer from './containers/updateContainer'
import NoticeContainer from './containers/noticeContainer'

class App extends React.Component{
    render() {
        return (
            <div className="App">
                <Header/>
                <Switch>
                    <Route path='/' component={NoticeContainer} exact={true}/>
                    <Route path='/notice' component={NoticeContainer} exact={true}/>
                    <Route path='/update' component={UpdateContainer} exact={true}/>
                </Switch>
                <Footer/>
            </div>
        )
    }
}

export default App;
