
 
import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { withStyles } from "@material-ui/styles";

import { signUp } from '../store/actions/authActions';

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

import { useFirestore } from 'react-redux-firebase'

const styles = () => ({
    "@global": {
        body: {
            backgroundColor: "#fff"
        }},

    paper: {
        marginTop: 100,
        display: "flex",
        padding: 20,
        flexDirection: "column",
        alignItems: "center"
    },
    avatar: {
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "#f50057"
    },
    form: {
        marginTop: 1
    },
    errorText: {
        color: "#f50057",
        marginBottom: 5,
        textAlign: "center"
    }
});


class SignUp extends Component {

    state = {
        email: '',
        password: '',
        password2: '',
        firstName: '',
        lastName: '',
        isAdmin: false
    }

    handleChange = (e) => {
        this.setState(
            {
                [e.target.id]: e.target.value
            }
        )
    }


    handleSubmit = (e) => {

        //const firestore = getFirestore()

        e.preventDefault();
        console.log("SignUp comp this.state on creating user.", this.state);
        //console.log("SignUp firestore", firestore);
        this.props.signUp(this.state)
    };

    render() {
        const { classes, loginError, isAuthenticated } = this.props;

        const isInValid = this.state.password !== this.state.password2;

        if (isAuthenticated) {
            return <Redirect to="/" />;
        } else {
            return (
            <Container component="main" maxWidth="xs">
                <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign Up
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        autoComplete="lname"
                        name="lastName"
                        variant="outlined"
                        required
                        fullWidth
                        id="lastName"
                        label="姓"
                        autoFocus
                        onChange={this.handleChange}
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="firstName"
                        label="名"
                        name="firstName"
                        autoComplete="fname"
                        onChange={this.handleChange}
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        onChange={this.handleChange}
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        onChange={this.handleChange}
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="password2"
                        label="confirm Password"
                        type="password"
                        id="password2"
                        onChange={this.handleChange}
                    />
                    </Grid>
                </Grid>
                <Button  disabled={isInValid} 
                    type="button"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={this.handleSubmit}
                >
                    Sign Up
                </Button>
                <Grid container justify="flex-end">
                <Grid item>
                    <Link href="/login" variant="body2">
                    Already have an account? Sign in
                    </Link>
                </Grid>
                </Grid>
                </Paper>
            </Container>
            );
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch( signUp(newUser) )
        //signUp: (newUser) => signUp(ownProps, dispatch, newUser) 
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError

    }
}


export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(SignUp));

