//styles
import styles from '../styles/components/RightBar.styles.module.css'
//components
import Online from './Online'
//dummyData
import { Users } from '../dummyData'


const RightBar = () => {
    return (
        <section className={ styles.RightBar }>
            <div className={ styles.Wrapper }>
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
            </div>
        </section>
    )
}

export default RightBar
