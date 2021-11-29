import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
//styles
import styles from '../styles/components/RightBar.styles.module.css'
//components
import Online from './Online'
//dummyData
import { Users } from '../dummyData'

const PF = process.env.REACT_APP_PUBLIC_FOLDER
const API_URL = process.env.REACT_APP_API_URL


const RightBar = ({user}) => {
    const [friends, setFriends] = useState([])


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
                        ? <ProfileRightBar user={ user } friends={ friends } />
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


const ProfileRightBar = ({user, friends}) => (
    <>
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

export default RightBar
