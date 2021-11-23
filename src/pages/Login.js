import styles from '../styles/pages/Login.styles.module.css'

const Login = () => {
    return (
        <section className={ styles.Login }>
            <div className={ styles.Wrapper }>
                <section className={ styles.Left }>
                    <h3 className={ styles.Logo }>HAHSSocial</h3>

                    <p className={ styles.Desc }>Connect with your friends and the world around you on HAHSSocial</p>
                </section>

                <section className={ styles.Right}>
                    <div className={ styles.Box}>
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

                        <button className={ styles.Button} type="button">Log In</button>

                        <span className={ styles.Forgot }>Forgot Password?</span>

                        <button className={ `${styles.Button} ${styles.RegisterButton}` } type="button">Create a New Account</button>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Login
