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
        case actions.FOLLOW:
            return {
                ...state,
                user: {
                    ...state.user,
                    followings: [
                        ...state.user.followings,
                        action.payload
                    ]
                }
            }
        case actions.UNFOLLOW:
            return {
                ...state,
                user: {
                    ...state.user,
                    followings: state.user.followings
                        .filter(follow => follow !== action.payload)
                }
            }

        default:
            return state
    }
}

export default AuthReducer
