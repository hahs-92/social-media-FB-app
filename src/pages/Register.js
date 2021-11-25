import { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router'
//styles
import styles from '../styles/pages/Register.styles.module.css'
//context
import { AuthContext } from '../context/AuthContext'

const Register = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

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
                    <div className={ styles.Box}>
                        <input
                            className={ styles.Input }
                            type="text"
                            placeholder="username"
                        />
                        <input
                            className={ styles.Input }
                            type="email"
                            placeholder="email"
                        />
                        <input
                            className={ styles.Input }
                            type="password"
                            placeholder="password"
                        />
                        <input
                            className={ styles.Input }
                            type="password"
                            placeholder="password again"
                        />

                        <button className={ styles.Button} type="button">Sign Up</button>

                        <button className={ `${styles.Button} ${styles.RegisterButton}` } type="button">Log into  Account</button>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Register
