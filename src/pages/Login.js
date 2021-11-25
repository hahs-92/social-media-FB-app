import { useRef, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
//icons-components
import { CircularProgress } from '@mui/material'
//styles
import styles from '../styles/pages/Login.styles.module.css'
//helpers
import { loginCall } from '../helpers/apiCalls'
//context
import { AuthContext } from '../context/AuthContext'

const Login = () => {

    const email = useRef()
    const password = useRef()

    const navigate = useNavigate()

    const {
        user,
        isFetching,
        error,
        dispatch
    } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        loginCall({
            email: email.current.value,
            password: password.current.value
        }, dispatch)
    }

    useEffect(() => {
        user && navigate('/')
    }, [user])

    return (
        <section className={ styles.Login }>
            <div className={ styles.Wrapper }>
                <section className={ styles.Left }>
                    <h3 className={ styles.Logo }>HAHSSocial</h3>

                    <p className={ styles.Desc }>
                        Connect with your friends and the world around you on HAHSSocial
                    </p>
                </section>

                <section className={ styles.Right}>
                    <form className={ styles.Box} onSubmit={ handleSubmit }>
                        <input
                            className={ styles.Input }
                            type="email"
                            placeholder="Email"
                            required
                            ref={ email }
                        />
                        <input
                            className={ styles.Input }
                            type="password"
                            placeholder="Password"
                            required
                            minLength={ 6 }
                            ref={ password }
                        />

                        <button className={ styles.Button} type="submit" disabled={ isFetching }>
                            { isFetching ? <CircularProgress color="inherit"  /> : "Log In" }
                        </button>

                        <span className={ styles.Forgot }>Forgot Password?</span>

                        <button
                            className={ `${styles.Button} ${styles.RegisterButton}` }
                            type="submit">
                                { isFetching ? <CircularProgress color="inherit" /> : "Create a New Account" }
                        </button>
                    </form>
                </section>
            </div>
        </section>
    )
}

export default Login
