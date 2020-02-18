
const InitState = {
    authError : null,

}

const authReducer = (state = InitState, action ) => {
    switch(action.type) {
        
        case 'LOGIN_ERROR':
            console.log("login error from authreducer.")
            return {
                ...state,
                authError: 'LOGIN FAILED.'
            }
        
        case 'LOGIN_SUCCESS':
            console.log("login success from authreducer.")
            return {
                ...state,
                authError: null
            }
        
        case 'SIGNOUT_SUCCESS':
            console.log("signout success from authreducer.")
            return state;
            
        case 'SIGNUP_SUCCESS':
            console.log("signup success from authreducer.")
            return {
                ...state,
                authError: null
            }

        case 'SIGNUP_ERROR':
            console.log("signup error from authreducer.")
            return {
                ...state,
                authError: action.err.message
            }
                


        default:
            return state;

    }
    
}

export default authReducer;