import { createContext, useReducer } from 'react'
//reducers
import AuthReducer from './AuthReducer'


const INITIAL_STATE = {
    user: "Alex",
    isFetching: false,
    error: false
}

export const AuthContext = createContext(INITIAL_STATE)


//provider wrapper
export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

    return(
       <AuthContext.Provider value={{
           user: state.user,
           isFetching: state.isFetching,
           error: state.error,
           dispatch
       }}>
           { children }
       </AuthContext.Provider>
    )
}
