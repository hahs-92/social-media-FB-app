//actions
import { actions } from './AuthActions'

const AuthReducer = (state, action) => {
    switch (action.type) {
        case actions.LOGIN_START:
            return {
                ...state,
                user: null,
                isFetching: true,
                error: false
            }
        case actions.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isFetching: false,
                error: false
            }
        case actions.LOGIN_FAILURE:
            return {
                ...state,
                user: null,
                isFetching: false,
                error: true
            }

        default:
            return state
    }
}

export default AuthReducer
