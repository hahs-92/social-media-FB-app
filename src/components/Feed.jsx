//styles
import styles from '../styles/components/Feed.styles.module.css'
//components
import Share from './Share'
import Post from './Post'

const Feed = () => {
    return (
        <section className={ styles.Feed }>
            <div className={ styles.Wrapper }>
                <Share />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </section>
    )
}

export default Feed
