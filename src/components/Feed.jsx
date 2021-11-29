import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
//styles
import styles from '../styles/components/Feed.styles.module.css'
//components
import Share from './Share'
import Post from './Post'
//dummyData
// import { Posts } from '../dummyData.js'
//context
import { AuthContext } from '../context/AuthContext'

const API_URL = process.env.REACT_APP_API_URL

const Feed = ({username}) => {
    const { user } = useContext(AuthContext)
    const [posts, setPost] = useState([])

    const fetchPosts = async() => {
        const res = username
            ? await axios.get(`${API_URL}/posts/profile/${username}`)
            : await axios.get(`${API_URL}/posts/timeline/${user._id}`)

        //order data by createdAt
        res.data = res.data.sort((post1, post2) => {
            return new Date(post2.createdAt) - new Date(post1.createdAt)
        })
        res.data.length
            ? setPost(res.data)
            : setPost([res.data])

    }

    useEffect(() => {
        fetchPosts()
    },[username, user._id])

    console.log("posts: ", posts)
    return (
        <section className={ styles.Feed }>
            <div className={ styles.Wrapper }>
                <Share />
                {/* {
                    posts.length && posts.map(post => (
                        <Post key={ post._id } post={ post } />
                    ))
                } */}
            </div>
        </section>
    )
}

export default Feed
