import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { makeLoginTest } from './store/actions/authActions';


class App extends Component {

    constructor(props) {
        super(props);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("App button.", this.state);
        this.props.makeLoginTest(this.state)
    }


    render () {

        console.log(this.props)
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">SignUp</h5>
                    
                    <div className="input-field">
                        <button className="btn blue lighten-1 z-depth-0">button</button>
                    </div>
                    
                </form>
            </div>

            )
    }



    
}


const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError

    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        makeLoginTest: (newUser) => dispatch( makeLoginTest(newUser) )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);