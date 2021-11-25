import { useRef } from 'react'
//styles
import styles from '../styles/pages/Login.styles.module.css'

const Login = () => {

    const email = useRef()
    const password = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email.current.value)
    }

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

                        <button className={ styles.Button} type="submit">Log In</button>

                        <span className={ styles.Forgot }>Forgot Password?</span>

                        <button
                            className={ `${styles.Button} ${styles.RegisterButton}` }
                            type="submit">
                                Create a New Account
                        </button>
                    </form>
                </section>
            </div>
        </section>
    )
}

export default Login
