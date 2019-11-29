import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom";
//
import Panel from "./pages/panel/panel";
import TicketsMain from './pages/forms/tickets/tickets_main';
import UsersMain from './pages/forms/users/users_main';
import Login from './pages/login/login';
//import _Login from './pages/login/_login';


class App extends Component{

    render(){
        return(
            <div>
                <Switch>
                    <Route exact={true} path="/" component={Login}/>
                    <Route path="/panel" component={Panel}/>
                    <Route path="/tickets" component={MainTickets}/>
                    <Route path="/users" component={UsersMain}/>
                </Switch>
            </div>    
        )
    }
}

export default App;
