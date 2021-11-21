import React from 'react'
//styles
import styles from '../styles/pages/Home.styles.module.css'
//components
import TopBar from '../components/TopBar'
import SideBar from '../components/SideBar'
import Feed from '../components/Feed'
import RightBar from '../components/RightBar'

const Home = () => {
    return (
        <>
            <TopBar />

            <div className={ styles.HomeWrapper }>
                <SideBar />
                <Feed />
                <RightBar />
            </div>
        </>
    )
}

export default Home
