import * as ActionTypes from './ActionTypes';
import myFirebase from '../firebase/firebase';

const requestLogin = () => {
    return {
        type: ActionTypes.LOGIN_REQUEST
    };
  };
  
const receiveLogin = user => {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        user
    };
  };
  
const loginError = () => {
    return {
        type: ActionTypes.LOGIN_FAILURE
    };
  };
  
const requestLogout = () => {
    return {
        type: ActionTypes.LOGOUT_REQUEST
    };
  };
  
const receiveLogout = () => {
    return {
        type: ActionTypes.LOGOUT_SUCCESS
    };
  };
  
const logoutError = () => {
    return {
        type: ActionTypes.LOGOUT_FAILURE
    };
  };
  
const verifyRequest = () => {
    return {
        type: ActionTypes.VERIFY_REQUEST
    };
  };
  
const verifySuccess = () => {
    return {
        type: ActionTypes.VERIFY_SUCCESS
    };
  };


const requestSignUp = () => {
    return {
        type: ActionTypes.SIGNUP_REQUEST
    };
  };
  
const receiveSignUp = user => {
    return {
        type: ActionTypes.SIGNUP_SUCCESS,
        user
    };
  };
  
const signUpError = () => {
    return {
        type: ActionTypes.SIGNUP_FAILURE
    };
  };




export const signupUser = (email, password) => dispatch => {

    dispatch(requestSignUp());
    myFirebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
            dispatch(receiveSignUp(user));
        })
        .catch(error => {
        //Do something with the error if you want!
            dispatch(signUpError());
        });

    };
  

export const loginUser = (email, password) => dispatch => {

    dispatch(requestLogin());
    myFirebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
            dispatch(receiveLogin(user));
        })
        .catch(error => {
        //Do something with the error if you want!
            dispatch(loginError());
        });

    };
  
export const logoutUser = () => dispatch => {

    dispatch(requestLogout());
    myFirebase
        .auth()
        .signOut()
        .then(() => {
        dispatch(receiveLogout());
        })
        .catch(error => {
        //Do something with the error if you want!
        dispatch(logoutError());
        });
  };
  
export const verifyAuth = () => dispatch => {

    dispatch(verifyRequest());
    myFirebase
        .auth()
        .onAuthStateChanged(user => {
        if (user !== null) {
            dispatch(receiveLogin(user));
        }
        dispatch(verifySuccess());
        });
  };
  