import { useState } from 'react'
//icons
import { MoreVert } from '@mui/icons-material'
//styles
import styles from '../styles/components/Post.styles.module.css'
//dummyData
import { Users } from '../dummyData'

const Post = ({ post }) => {
    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)

    const likeHandler = () => {
        setLike(isLiked ? like -1 : like + 1)
        setIsLiked(!isLiked)
    }

    return (
        <article className={ styles.Post }>
            <div className={ styles.Wrapper }>
                <section className={ styles.Top }>
                    <div className={ styles.TopLeft }>
                        <img src={Users.filter(user => user.id === post?.userId)[0].profilePicture} alt="avatar" />
                        <span className={ styles.UserName }>
                            { Users.filter(user => user.id === post?.userId)[0].username }
                        </span>
                        <span className={ styles.Date }>{ post.date }</span>
                    </div>

                    <div className={ styles.TopRight }>
                        <MoreVert />
                    </div>
                </section>

                <section className={ styles.Center }>
                    <span className={ styles.CenterText }>
                        { post?.desc }
                    </span>
                    <img src={post?.photo} alt="metro" />
                </section>

                <section className={ styles.Bottom }>
                    <section className={styles.BottomLeft}>
                        <img src="/assets/like.png" alt="like-icon" onClick={ likeHandler } />
                        <img src="/assets/heart.png" alt="heart-icon" onClick={ likeHandler } />
                        <span className={ styles.BottonCounter }>
                            { like } people liked it
                        </span>
                    </section>

                    <section className={ styles.BottomRight }>
                        <span className={ styles.CommentText }>
                            { post.comment} comments
                        </span>
                    </section>
                </section>
            </div>
        </article>
    )
}

export default Post
