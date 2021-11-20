import React from 'react'
//styles
import styles from '../styles/pages/Home.styles.modules.css'
//components
import TopBar from '../components/TopBar'

const Home = () => {
    return (
        <div className={styles.Home }>
            <TopBar />
        </div>
    )
}

export default Home
