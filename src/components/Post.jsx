//icons
import { MoreVert } from '@mui/icons-material'
//styles
import styles from '../styles/components/Post.styles.module.css'

const Post = () => {
    return (
        <article className={ styles.Post }>
            <div className={ styles.Wrapper }>
                <section className={ styles.Top }>
                    <div className={ styles.TopLeft }>
                        <img src="/assets/person/1.jpeg" alt="avatar" />
                        <span className={ styles.UserName }>Alex HAHS</span>
                        <span className={ styles.Date }>5 min ago</span>
                    </div>

                    <div className={ styles.TopRight }>
                        <MoreVert />
                    </div>
                </section>

                <section className={ styles.Center }>
                    <span className={ styles.CenterText }>
                        Hey! Its my firts post :)
                    </span>
                    <img src="/assets/post/1.jpeg" alt="metro" />
                </section>

                <section className={ styles.Bottom }>
                    <section className={styles.BottomLeft}>
                        <img src="/assets/like.png" alt="like-icon" />
                        <img src="/assets/heart.png" alt="heart-icon" />
                        <span className={ styles.BottonCounter }>
                            32 people liked it
                        </span>
                    </section>

                    <section className={ styles.BottomRight }>
                        <span className={ styles.CommentText }>
                            9 comments
                        </span>
                    </section>
                </section>
            </div>
        </article>
    )
}

export default Post
