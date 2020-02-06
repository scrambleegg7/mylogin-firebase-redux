import * as ActionTypes from './ActionTypes';


  
export const authControl =  (
        state = {
            isLoggingIn: false,
            isLoggingOut: false,
            isVerifying: false,
            loginError: false,
            logoutError: false,
            isAuthenticated: false,
            user: {}
        },
        action ) => {

        switch (action.type) {
            case ActionTypes.LOGIN_REQUEST:
                return {
                    ...state,
                    isLoggingIn: true,
                    loginError: false
                };
            case ActionTypes.LOGIN_SUCCESS:
                return {
                    ...state,
                    isLoggingIn: false,
                    isAuthenticated: true,
                    user: action.user
                };
            case ActionTypes.LOGIN_FAILURE:
                return {
                    ...state,
                    isLoggingIn: false,
                    isAuthenticated: false,
                    loginError: true
                };
            case ActionTypes.LOGOUT_REQUEST:
                return {
                    ...state,
                    isLoggingOut: true,
                    logoutError: false
                };
            case ActionTypes.LOGOUT_SUCCESS:
                return {
                    ...state,
                    isLoggingOut: false,
                    isAuthenticated: false,
                    user: {}
                };
            case ActionTypes.LOGOUT_FAILURE:
                return {
                    ...state,
                    isLoggingOut: false,
                    logoutError: true
                };
            case ActionTypes.VERIFY_REQUEST:
                return {
                    ...state,
                    isVerifying: true,
                    verifyingError: false
                };
            case ActionTypes.VERIFY_SUCCESS:
                return {
                    ...state,
                    isVerifying: false
                };
            default:
                return state;
    }
  };
  