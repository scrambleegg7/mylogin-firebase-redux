import React, { Component } from "react";
import { connect } from "react-redux";

import { Route, Redirect } from "react-router-dom";

import { signOut } from '../store/actions/authActions';

class Home extends Component {
    
    handleLogout = () => {
        //const { dispatch } = this.props;
        //dispatch(logoutUser());
        this.props.signOut();
    };

    render() {
        const { auth, authError } = this.props;

        if (!auth.uid) {
            return <Redirect to="/signin" />;
        }    
        return (
            <div>
                <h1>This is your app's protected area.</h1>
                <p>Any routes here will also be protected</p>
                
                <button onClick={this.handleLogout}>Logout</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch( signOut() )
    }
}


const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
