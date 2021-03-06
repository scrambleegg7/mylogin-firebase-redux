
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// react-redux-firebase 3.0 implmentation 

import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';

import { Provider } from 'react-redux';

import thunk from 'redux-thunk';
// import firebase tools 
import { reduxFirestore,   getFirestore } from 'redux-firestore';
import { createFirestoreInstance } from 'redux-firestore'
import { ReactReduxFirebaseProvider,  getFirebase } from 'react-redux-firebase';

import fbConfig from './config/fbConfig';
 
const myconfig = {
    userProfile: 'users', // where profiles are stored in database
    useFirestoreForProfile: true // use Firestore for profile instead of RTDB
  }

const store = createStore(rootReducer, 
        applyMiddleware(  thunk.withExtraArgument(  getFirebase ) ), 
   //     reduxFirestore(fbConfig), 
   //     reactReduxFirebase(fbConfig, { useFirestoreForProfile: true, userProfile: 'users',   attachAuthIsReady: true} )
   //     )
);

const rrfProps = {
    firebase: fbConfig,
    config: myconfig,
    dispatch: store.dispatch,
    createFirestoreInstance
    };

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <App />
        </ReactReduxFirebaseProvider>
    </Provider>,
document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
