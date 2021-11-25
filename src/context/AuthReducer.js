const AuthReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_START':
            return {
                ...state,
                user: null,
                isFecthing: true,
                error: false
            }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                user: action.payload,
                isFecthing: false,
                error: false
            }
        case 'LOGIN_FAILURE':
            return {
                ...state,
                user: null,
                isFecthing: false,
                error: true
            }

        default:
            return state
    }
}

export default AuthReducer
