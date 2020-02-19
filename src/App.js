import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from "react-redux";



import SignUp from "./components/SignUpComponent";
import SignIn from "./components/SignInComponent";
import Home from "./components/HomeComponent";

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