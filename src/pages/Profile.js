import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
//styles
import styles from '../styles/pages/Profile.styles.module.css'
//components
import TopBar from '../components/TopBar'
import SideBar from '../components/SideBar'
import Feed from '../components/Feed'
import RightBar from '../components/RightBar'

const API_URL = process.env.REACT_APP_API_URL

const Profile = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const [user, setUser] = useState({})

    const { username } = useParams()

    const fetchUser = async() => {
        const res = await axios.get(`${API_URL}/users/?username=${username}`)
        setUser(res.data)
    }

    useEffect(() => {
        fetchUser()
    },[username])

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
                                src={ user.coverPicture || `${PF}person/noCover.png`}
                                alt="cover"
                            />

                            <img
                                className={ styles.UserImage }
                                src={ user.profilePicture || `${PF}person/noAvatar.png`}
                                alt="user"
                            />
                        </div>

                        <div className={ styles.Info }>
                            <h4 className={ styles.InfoName }>{ user.username }</h4>

                            <p className={ styles.InfoDesc }>{ user?.desc }</p>
                        </div>
                    </section>

                    <section className={ styles.RightBottom}>
                        <Feed username={username} />
                        <RightBar user={user}/>
                    </section>
                </section>
            </div>
        </>
    )
}

export default Profile
