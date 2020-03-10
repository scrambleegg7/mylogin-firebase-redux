import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from "react-redux";

import BoardDetail from './components/boards/BoardDetail';
import CreateBoard from './components/boards/CreateBoard';
import EditBoard from './components/boards/EditBoard';

import PassForget from "./components/PassForgetComponent";
import SignUp from "./components/SignUpComponent";
import SignIn from "./components/SignInComponent";
import Home from "./components/HomeComponent";

import Header from './components/menu/Header';

class App extends Component {

    constructor(props) {
        super(props);
    }

    render () {

        

        console.log("Apps props",this.props)
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} /> 
                    <Route path="/project/:id" component={BoardDetail} />
                    <Route path="/create" component={CreateBoard} />
                    <Route path="/edit/:id" component={EditBoard} />
                
                    <Route path="/passforget" component={PassForget} />    

                    <Route path="/signup" component={SignUp} />    
                    <Route path="/signin" component={SignIn} />    

                </Switch>
            </Router>      
        )
    }



    
}


const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError

    }
}


export default connect(mapStateToProps)(App);