import { useEffect, useContext, useRef } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'
//styles
import styles from '../styles/pages/Register.styles.module.css'
//context
import { AuthContext } from '../context/AuthContext'

const API_URL = process.env.REACT_APP_API_URL

const Register = () => {

    const username = useRef()
    const email = useRef()
    const password = useRef()
    const passwordAgain = useRef()

    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogin = () => {
        navigate('/login')
    }

    const handleSubmit = async(e) => {
        e.preventDefault()

        if( password.current.value !== passwordAgain.current.value ) {
            passwordAgain.current.setCustomValidity('Passwords do not match')
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value
            }

            try {
                await axios.post(`${API_URL}/auth/register`, user)

                //OK
                navigate('/login')
            } catch (error) {
                console.error(error)
            }
        }

    }

    useEffect(() => {
        user && navigate('/')
    }, [user])


    return (
        <section className={ styles.Register }>
            <div className={ styles.Wrapper }>
                <section className={ styles.Left }>
                    <h3 className={ styles.Logo }>HAHSSocial</h3>

                    <p className={ styles.Desc }>Connect with your friends and the world around you on HAHSSocial</p>
                </section>

                <section className={ styles.Right}>
                    <form className={ styles.Box} onSubmit={ handleSubmit }>
                        <input
                            className={ styles.Input }
                            type="text"
                            placeholder="username"
                            ref={ username }
                            required
                        />
                        <input
                            className={ styles.Input }
                            type="email"
                            placeholder="email"
                            ref={email}
                            required
                        />
                        <input
                            className={ styles.Input }
                            type="password"
                            placeholder="password"
                            ref={ password }
                            required
                            minLength={ 6 }
                        />
                        <input
                            className={ styles.Input }
                            type="password"
                            placeholder="password again"
                            ref={ passwordAgain}
                            required
                            minLength={ 6 }
                        />

                        <button className={ styles.Button} type="submit">Sign Up</button>

                        <button
                            className={ `${styles.Button} ${styles.RegisterButton}` }
                            type="button"
                            onClick={ handleLogin }
                            >
                                Log into  Account
                        </button>
                    </form>
                </section>
            </div>
        </section>
    )
}

export default Register
