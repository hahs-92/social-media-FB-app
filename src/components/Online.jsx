import styles from '../styles/components/Online.styles.module.css'

const Online = ({user}) => {
    return (
        <li className={ styles.Friend }>
            <article className={ styles.ProfileImageWrapper }>
                <img className={ styles.ProfileImage } src={user.profilePicture }alt="person-profile" />

                <span className={ styles.Online}></span>
            </article>

            <span className={ styles.UserName }>
                { user.username }
            </span>
        </li>
    )
}

export default Online
