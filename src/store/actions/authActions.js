import { withFirestore } from 'react-redux-firebase'
import { useFirestore } from 'react-redux-firebase'

//import   firebase  from '../../config/fbConfig';

export const signIn = (credentials) => {

    return (dispatch , getState,  getFirebase  ) => {

        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        )
        .then( () => {
            dispatch( { type: 'LOGIN_SUCCESS' } );
        })
        .catch( (err) => {
            dispatch( { type: 'LOGIN_ERROR'} );
        })
        

    }
}

export const makeLoginTest = (newUser) => {

    return (dispatch, getState, getFirebase) => {

        const firebase = getFirebase();
        const user_email = "defaulttest@g.com";
        const user_password = "123456";

        firebase.auth().createUserWithEmailAndPassword(
            user_email,
            user_password
        )
        .then(() => {
            dispatch( { type: 'SIGNUP_SUCCESS' } );
        })

    }

}

export const signOut = () => {

    return (dispatch , getState,  getFirebase  ) => {

        const firebase = getFirebase();

        firebase.auth().signOut().then( () =>
            dispatch( { type: 'SIGNOUT_SUCCESS' } ));
    }
}

export const signUp = (newUser) => {

    console.log("authAction signUp", newUser)
    //console.log("authAction signUp props", props)

    return (dispatch , getState, getFirebase, getFirestore  ) => {

        const firebase = getFirebase();
        
        // react-redux-firebase v3.0.0 workaround 
        // https://github.com/prescottprue/react-redux-firebase/issues/785

        const firestore = getFirebase().firestore();
        const REACT_APP_CONFIRMATION_EMAIL_REDIRECT = "http://localhost:3000"

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        )
        .then( (resp) => {
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0],
                email: newUser.email,
                isAdmin: newUser.isAdmin,
            }) 
        })
        .then( () => {

            const user = firebase.auth().currentUser;
            firebase.auth().languageCode = 'ja';
            
            user.sendEmailVerification().then(function() {
                
                console.log("email verification after sending confirmation message.",user.emailVerified)
                alert("send confirmation message..")

              }).catch(function(error) {
                alert("Error happened", error)
              });
            
        })
        .then(() => {
            dispatch( { type: 'SIGNUP_SUCCESS' } );
        })
        .catch( (err) => {
            dispatch( { type: 'SIGNUP_ERROR', err });
        })
            
    }
}