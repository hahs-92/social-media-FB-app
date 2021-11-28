import axios from 'axios'
//actions
import { actions } from '../context/AuthActions'


const API_URL = process.env.REACT_APP_API_URL


export const loginCall = async (userCredentials, dispatch) => {
    dispatch({ type: actions.LOGIN_START })

    try {
        const res = await axios.post(`${API_URL}/auth/login`, userCredentials)

        dispatch({ type: actions.LOGIN_SUCCESS, payload: res.data })
    } catch (error) {
        dispatch({ type: actions.LOGIN_FAILURE, payload: error})
    }
}