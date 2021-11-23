import styles from '../styles/components/CloseFriend.styles.module.css'

const CloseFriend = ({ user }) => {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    return (
        <li className={ styles.Friend }>
            <img src={ PF+user?.profilePicture } alt="friend" />
            <span className={ styles.FriendName}>
                { user?.username }
            </span>
        </li>
    )
}

export default CloseFriend
