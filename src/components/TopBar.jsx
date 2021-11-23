import { Link } from 'react-router-dom'
//icons
import { Search, Person, Chat, Notifications } from '@mui/icons-material'
//styles
import styles from '../styles/components/TopBar.styles.module.css'


const TopBar = () => {
    return (
        <article className={ styles.TopBar }>
            <section className={ styles.TopBarLeft}>
                <Link to='/'>
                    <span className={styles.Logo}>HAHSSocial</span>
                </Link>
            </section>

            <section className={ styles.TopBarCenter}>
                <div className={ styles.SearchBar }>
                    <Search className={ styles.SearchIcon} />
                    <input type="text" className={styles.SearchInput}  placeholder='Search for friend, post or video'/>
                </div>
            </section>

            <section className={ styles.TopBarRight}>
                <div className={ styles.TopBarLinks}>
                    <span className={styles.Link}>HomePage</span>
                    <span className={styles.Link}>TimeLine</span>
                </div>

                <div className={ styles.TopBarIcons }>
                    <div className={ styles.IconItem}>
                        <Person />
                        <span className={ styles.IconBage}>1</span>
                    </div>

                    <div className={ styles.IconItem}>
                        <Chat />
                        <span className={ styles.IconBage}>1</span>
                    </div>

                    <div className={ styles.IconItem}>
                        <Notifications />
                        <span className={ styles.IconBage}>1</span>
                    </div>
                </div>

                <div className={ styles.TopBarImage}>
                    <img src="/assets/person/1.jpeg" alt="top-pinture" />
                </div>
            </section>
        </article>
    )
}

export default TopBar
