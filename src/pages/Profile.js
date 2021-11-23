//styles
import styles from '../styles/pages/Profile.styles.module.css'
//components
import TopBar from '../components/TopBar'
import SideBar from '../components/SideBar'
import Feed from '../components/Feed'
import RightBar from '../components/RightBar'

const Profile = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    return (
        <>
            <TopBar />

            <div className={ styles.Profile }>
                <SideBar />

                <section className={ styles.Right }>
                    <section className={ styles.RightTop }>
                        <div className={ styles.Cover }>
                            <img
                                className={ styles.CoverImage }
                                src={`${PF}post/3.jpeg`}
                                alt="cover"
                            />

                            <img
                                className={ styles.UserImage }
                                src={`${PF}person/7.jpeg`}
                                alt="user"
                            />
                        </div>

                        <div className={ styles.Info }>
                            <h4 className={ styles.InfoName }>HAHS</h4>

                            <p className={ styles.InfoDesc }>hi my name is alex, this is a test</p>
                        </div>
                    </section>

                    <section className={ styles.RightBottom}>
                        <Feed />
                        <RightBar profile/>
                    </section>
                </section>
            </div>
        </>
    )
}

export default Profile
