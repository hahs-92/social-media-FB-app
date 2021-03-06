import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { format } from 'timeago.js'
//icons
import { MoreVert } from '@mui/icons-material'
//styles
import styles from '../styles/components/Post.styles.module.css'
//dummyData
// import { Users } from '../dummyData'
//context
import { AuthContext } from '../context/AuthContext'

const API_URL = process.env.REACT_APP_API_URL
const PF = process.env.REACT_APP_PUBLIC_FOLDER

const Post = ({ post }) => {
    const [like, setLike] = useState(post.likes.length)
    const [isLiked, setIsLiked] = useState(false)
    const [user, setUser] = useState({})
    const { user: currentUser } = useContext(AuthContext)

    const fetchUser = async() => {
        const res = await axios.get(`${API_URL}/users/?userId=${post.userId}`)
        setUser(res.data)
    }

    useEffect(() => {
        setIsLiked(post.likes.includes(currentUser._id))
    },[currentUser._id, post.likes])

    useEffect(() => {
        fetchUser()
    },[post.userId])

    const likeHandler = () => {
        try {
            axios.patch(`${API_URL}/posts/${post._id}/like`, {
                userId: currentUser._id
            })
        } catch (error) {
            console.error(error.message)
        }
        setLike(isLiked ? like -1 : like + 1)
        setIsLiked(!isLiked)
    }

    return (
        <article className={ styles.Post }>
            <div className={ styles.Wrapper }>
                <section className={ styles.Top }>
                    <div className={ styles.TopLeft }>
                        <Link to={`/profile/${ user.username }`}>
                            <img
                                // src={Users.filter(user => user.id === post?.userId)[0].profilePicture}
                                src={ user?.profilePicture || PF+"person/noAvatar.png" }
                                alt="avatar"
                            />
                        </Link>
                        <span className={ styles.UserName }>
                            {/* { Users.filter(user => user.id === post?.userId)[0].username } */}
                            { user.username }
                        </span>
                        <span className={ styles.Date }>{ format(post.createdAt) }</span>
                    </div>

                    <div className={ styles.TopRight }>
                        <MoreVert />
                    </div>
                </section>

                <section className={ styles.Center }>
                    <span className={ styles.CenterText }>
                        { post?.desc }
                    </span>

                    { post.img && <img src={ post.img || PF+"person/noCover.png" } alt="metro" /> }

                </section>

                <section className={ styles.Bottom }>
                    <section className={styles.BottomLeft}>
                        <img src={`${PF}like.png`} alt="like-icon" onClick={ likeHandler } />
                        <img src={`${PF}heart.png`} alt="heart-icon" onClick={ likeHandler } />
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
