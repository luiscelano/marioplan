const initState ={
    authError: null
}

const authReducer = (state = initState,action)=>{
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('Login Error')
        return {
            ...state,
            authError: 'Login Failed' 
        }
        case 'LOGIN_SUCCESS':
            console.log('Login Success')
            return {
                ...state,
                authError: null
            }
        case 'LOGOUT_SUCCESS':
            console.log('logout success')
            return state;
        default:
            return state;
    }
}
export default authReducer