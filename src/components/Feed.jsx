//styles
import styles from '../styles/components/Feed.styles.module.css'
//components
import Share from './Share'
import Post from './Post'
//dummyData
import { Posts } from '../dummyData.js'

const Feed = () => {
    return (
        <section className={ styles.Feed }>
            <div className={ styles.Wrapper }>
                <Share />
                {
                    Posts.map(post => (
                        <Post key={ post.id } post={ post } />
                    ))
                }
            </div>
        </section>
    )
}

export default Feed
