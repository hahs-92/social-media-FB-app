export const actions = {
    LOGIN_START: 'LOGIN_START',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILURE: 'LOGIN_FAILURE',
    FOLLOW: 'FOLLOW',
    UNFOLLOW: 'UNFOLLOW'
}


export const LoginStart = (userCredentials) => ({
    type: actions.LOGIN_START
})

export const LoginSuccess = (user) => ({
    type: actions.LOGIN_SUCCESS,
    payload: user
})

export const LoginFailure = (error) => ({
    type: actions.LOGIN_FAILURE,
    payload: error
})

export const Follow = (userId) => ({
    type: actions.FOLLOW,
    payload: userId
})

export const UnFollow = (userId) => ({
    type: actions.UNFOLLOW,
    payload: userId
})