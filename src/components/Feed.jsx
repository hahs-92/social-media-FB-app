import { useState, useEffect } from 'react'
import axios from 'axios'
//styles
import styles from '../styles/components/Feed.styles.module.css'
//components
import Share from './Share'
import Post from './Post'
//dummyData
// import { Posts } from '../dummyData.js'
const API_URL = process.env.REACT_APP_API_URL

const Feed = () => {
    const [posts, setPost] = useState([])

    const fetchPosts = async() => {
        const res = await axios.get(`${API_URL}/posts/timeline/61957b6103b0ce5548e1c467`)
        setPost(res.data)
    }

    useEffect(() => {
        fetchPosts()
    },[])

    return (
        <section className={ styles.Feed }>
            <div className={ styles.Wrapper }>
                <Share />
                {
                    posts.map(post => (
                        <Post key={ post._id } post={ post } />
                    ))
                }
            </div>
        </section>
    )
}

export default Feed
