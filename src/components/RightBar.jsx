//styles
import styles from '../styles/components/RightBar.styles.module.css'
//components
import Online from './Online'
//dummyData
import { Users } from '../dummyData'

const PF = process.env.REACT_APP_PUBLIC_FOLDER


const RightBar = ({user}) => {
    return (
        <section className={ styles.RightBar }>
            <div className={ styles.Wrapper }>
                {
                    user
                        ? <ProfileRightBar user={ user } />
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


const ProfileRightBar = ({user}) => (
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

       <h4 className={ styles.Title}>User information</h4>

       <section className={ styles.Followings}>
           <div className={ styles.Following }>
               <img
                className={ styles.FollowingImage }
                src={`${PF}person/1.jpeg`}
                alt="following"
            />
               <span className={ styles.FollowingName }>Jess Gray </span>
           </div>

           <div className={ styles.Following }>
               <img
                className={ styles.FollowingImage }
                src={`${PF}person/2.jpeg`}
                alt="following"
            />
               <span className={ styles.FollowingName }>Jess Gray </span>
           </div>

           <div className={ styles.Following }>
               <img
                className={ styles.FollowingImage }
                src={`${PF}person/3.jpeg`}
                alt="following"
            />
               <span className={ styles.FollowingName }>Jess Gray </span>
           </div>

           <div className={ styles.Following }>
               <img
                className={ styles.FollowingImage }
                src={`${PF}person/4.jpeg`}
                alt="following"
            />
               <span className={ styles.FollowingName }>Jess Gray </span>
           </div>

           <div className={ styles.Following }>
               <img
                className={ styles.FollowingImage }
                src={`${PF}person/5.jpeg`}
                alt="following"
            />
               <span className={ styles.FollowingName }>Jess Gray </span>
           </div>

           <div className={ styles.Following }>
               <img
                className={ styles.FollowingImage }
                src={`${PF}person/6.jpeg`}
                alt="following"
            />
               <span className={ styles.FollowingName }>Jess Gray </span>
           </div>

           <div className={ styles.Following }>
               <img
                className={ styles.FollowingImage }
                src={`${PF}person/7.jpeg`}
                alt="following"
            />
               <span className={ styles.FollowingName }>Jess Gray </span>
           </div>
       </section>
    </>
)

export default RightBar
