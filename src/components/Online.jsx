//styles
import styles from '../styles/components/Online.styles.module.css'

const Online = ({user}) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    return (
        <li className={ styles.Friend }>
            <article className={ styles.ProfileImageWrapper }>
                <img
                    className={ styles.ProfileImage }
                    src={ PF+user.profilePicture }
                    alt="person-profile"
                />

                <span className={ styles.Online}></span>
            </article>

            <span className={ styles.UserName }>
                { user.username }
            </span>
        </li>
    )
}

export default Online
