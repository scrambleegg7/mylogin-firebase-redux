
 
import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { passForget } from '../store/actions/authActions';

import { withStyles } from "@material-ui/styles";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Link from '@material-ui/core/Link';

const styles = () => ({
    "@global": {
    body: {
        backgroundColor: "#fff"
    }
    },
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

class PassForget extends Component {

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

        console.log("SingIn submit.",this.state)
        this.props.passForget(this.state)
    //dispatch(loginUser(email, password));
    };

    render() {
        const { classes, auth, authError } = this.props;
        console.log("Signin auth",auth)
        console.log("Signin authError",authError)
        
        if (auth.uid) {
            return <Redirect to="/" />;
        } else {
            return (
                <Container component="main" maxWidth="xs">
                    <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        onChange={this.handleChange}
                    />
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={this.handleSubmit}
                    >
                        Password Reset
                    </Button>
                    <div className="red-text center">{ authError ?  <p>  {authError}  </p> : null      }</div>
                    <Link href="/signin" variant="body2">
                        パスワード本当はわかるんですよね？
                    </Link>
                    </Paper>
                </Container>
            );
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        passForget: (newUser) => dispatch( passForget(newUser) )
        //signUp: (newUser) => signUp(ownProps, dispatch, newUser) 
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError

    }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(PassForget));

