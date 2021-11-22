import styles from '../styles/components/CloseFriend.styles.module.css'

const CloseFriend = ({ user }) => {
    return (
        <li className={ styles.Friend }>
            <img src={ user?.profilePicture } alt="friend" />
            <span className={ styles.FriendName}>
                { user?.username }
            </span>
        </li>
    )
}

export default CloseFriend
