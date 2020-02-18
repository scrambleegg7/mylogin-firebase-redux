import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from "react-redux";



import SignUp from "./components/SignUpComponents";


class App extends Component {

    constructor(props) {
        super(props);
    }

    render () {

        console.log(this.props)
        return (
            <Router>
                <Switch>
                    <Route path="/signup" component={SignUp} />            
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