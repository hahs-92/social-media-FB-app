import styles from '../styles/components/RightBar.styles.module.css'

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
                    <li className={ styles.Friend }>
                        <article className={ styles.ProfileImageWrapper }>
                            <img className={ styles.ProfileImage } src="assets/person/3.jpeg" alt="person-profile" />

                            <span className={ styles.Online}></span>
                        </article>

                        <span className={ styles.UserName }>Jhon Carter</span>
                    </li>
                    <li className={ styles.Friend }>
                        <article className={ styles.ProfileImageWrapper }>
                            <img className={ styles.ProfileImage } src="assets/person/3.jpeg" alt="person-profile" />

                            <span className={ styles.Online}></span>
                        </article>

                        <span className={ styles.UserName }>Jhon Carter</span>
                    </li>
                    <li className={ styles.Friend }>
                        <article className={ styles.ProfileImageWrapper }>
                            <img className={ styles.ProfileImage } src="assets/person/3.jpeg" alt="person-profile" />

                            <span className={ styles.Online}></span>
                        </article>

                        <span className={ styles.UserName }>Jhon Carter</span>
                    </li>
                    <li className={ styles.Friend }>
                        <article className={ styles.ProfileImageWrapper }>
                            <img className={ styles.ProfileImage } src="assets/person/3.jpeg" alt="person-profile" />

                            <span className={ styles.Online}></span>
                        </article>

                        <span className={ styles.UserName }>Jhon Carter</span>
                    </li>
                    <li className={ styles.Friend }>
                        <article className={ styles.ProfileImageWrapper }>
                            <img className={ styles.ProfileImage } src="assets/person/3.jpeg" alt="person-profile" />

                            <span className={ styles.Online}></span>
                        </article>

                        <span className={ styles.UserName }>Jhon Carter</span>
                    </li>
                    <li className={ styles.Friend }>
                        <article className={ styles.ProfileImageWrapper }>
                            <img className={ styles.ProfileImage } src="assets/person/3.jpeg" alt="person-profile" />

                            <span className={ styles.Online}></span>
                        </article>

                        <span className={ styles.UserName }>Jhon Carter</span>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default RightBar
