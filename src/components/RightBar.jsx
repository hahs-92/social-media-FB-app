import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
//icons
import { Add, Remove } from '@mui/icons-material'
//styles
import styles from '../styles/components/RightBar.styles.module.css'
//components
import Online from './Online'
//dummyData
import { Users } from '../dummyData'
//context
import { AuthContext } from '../context/AuthContext'
//actions
import { actions } from '../context/AuthActions'

const PF = process.env.REACT_APP_PUBLIC_FOLDER
const API_URL = process.env.REACT_APP_API_URL


const RightBar = ({user}) => {
    const [friends, setFriends] = useState([])
    const { user: currentUser, dispatch } = useContext(AuthContext)

    const fetchFriends = async() => {
        try {
            const friendsList = await axios(`${API_URL}/users/friends/${user._id}`)

            setFriends(friendsList.data)
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        fetchFriends()
    },[user._id])


    return (
        <section className={ styles.RightBar }>
            <div className={ styles.Wrapper }>
                {
                    user
                        ? <ProfileRightBar
                            user={ user }
                            friends={ friends }
                            currentUser={ currentUser }
                            dispatch={ dispatch }
                            />
                        : <HomeRightBar />
                }
            </div>
        </section>
    )
}


const HomeRightBar = () => (
    <>
        <article className={ styles.BirthDayWrapper}>
            <img className={ styles.BirthDayImage } src="/assets/gift.png" alt="gift" />
            <span className={ styles.BirthDayText }>
                <b>Jess Gray</b> and <b>3 other friends</b> have a birthday today
            </span>
        </article>

        <img className={ styles.Ad } src="assets/ad.png" alt="ad" />

        <h4 className={ styles.Title }>
            Online Friends
        </h4>

        <ul className={ styles.FriendList}>
            {
                Users.map(user => (
                    <Online key={ user.id } user={ user } />
                ))
            }
        </ul>
    </>
)


const ProfileRightBar = ({user, friends, currentUser, dispatch }) => {
    const [followed, setFollowed] = useState(currentUser.followings.includes(user?._id))

    useEffect(() => {
        setFollowed(currentUser.followings.includes(user?._id))
    }, [currentUser, user._id])

    const handleClick = async() => {
        try {
            if(followed) {
                await axios.patch(`${API_URL}/users/${user._id}/unfollow`, {
                    userId: currentUser._id
                })

                dispatch({
                    type: actions.UNFOLLOW,
                    payload: currentUser._id
                })
            } else {
                await axios.patch(`${API_URL}/users/${user._id}/follow`, {
                    userId: currentUser._id
                })

                dispatch({
                    type: actions.FOLLOW,
                    payload: currentUser._id
                })
            }
        } catch (error) {
            console.error(error.message)
        }

        setFollowed(!followed)
    }

    return (
        <>
            {
                user !== currentUser && (
                    <button className={ styles.FollowButton } onClick={ handleClick } >
                        { followed ? "Unfollow" : "follow"}
                        { followed ? <Remove /> : <Add />}
                    </button>
                )
            }

            <h4 className={ styles.Title}>User information</h4>

            <section className={ styles.Info }>
                <div className={ styles.InfoItem }>
                    <span className={ styles.InfoKey }>City:</span>
                    <span className={ styles.InfoValue }>{user.city}</span>
                </div>

                <div className={ styles.InfoItem }>
                    <span className={ styles.InfoKey }>From:</span>
                    <span className={ styles.InfoValue }>{user.from}</span>
                </div>

                <div className={ styles.InfoItem }>
                    <span className={ styles.InfoKey }>Relationship:</span>
                    <span className={ styles.InfoValue }>
                            { user.relationship === 1
                                ? "single"
                                : user.relationship === 2
                                ? "married"
                                : "-"
                            }
                    </span>
                </div>
            </section>

            <h4 className={ styles.Title}>User friends</h4>

            <section className={ styles.Followings}>
                {
                    friends && friends.map(friend => (
                        <Link key={ friend._id } to={ `/profile/${friend.username}`}>
                                <div className={ styles.Following }>
                                    <img
                                        className={ styles.FollowingImage }
                                        src={`${friends.coverPicture}` || `${PF}/noAvatar.png`}
                                        alt="following"
                                    />
                                    <span className={ styles.FollowingName }>{ friend.username }</span>
                                </div>
                        </Link>
                    ))
                }
            </section>
        </>
    )
}

export default RightBar
