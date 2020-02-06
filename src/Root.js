import React, { Component } from 'react';
import { Provider } from 'react-redux';
//import { BrowseRouter as Router } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom'

import App from './App';
import { ConfigureStore }  from './actions/configureStore';

const store = ConfigureStore();


class Root extends Component {

    render() {
      return (
        <Provider store={store}>
          <BrowserRouter>
          <div>
            <App />
          </div>
          </BrowserRouter>
        </Provider>
      );
    }
  }
  
  export default Root;
  