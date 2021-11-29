import axios from 'axios'
import { useContext, useRef, useState } from 'react'
//icons
import {
    PermMedia,
    Label,
    Room,
    EmojiEmotions,
    Cancel
} from '@mui/icons-material'
//styles
import styles from '../styles/components/Share.styles.module.css'
//context
import { AuthContext } from '../context/AuthContext'

const PF = process.env.REACT_APP_PUBLIC_FOLDER
const API_URL = process.env.REACT_APP_API_URL

const Share = () => {

    const { user } =useContext(AuthContext)
    const desc = useRef()
    const [ file, setFile ] = useState(null)

    const handleSubmit = async(e) => {
        e.preventDefault()

        const newPost = {
            userId: user._id,
            desc: desc.current.value
        }

        if(file) {
            const data = new FormData()
            const filename = Date.now() + file.name

            data.append('file', file)
            data.append('name', filename)

            newPost.img = filename

            try {
                await axios(`${API_URL}/upload`, data)

                //refresh the page
                window.location.reload()
            } catch (error) {
                console.error(error.message)
            }
        }

        try {
            await axios.post(`${API_URL}/posts`, newPost)
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <article className={ styles.Share }>
            <div className={ styles.Wrapper}>
                <section className={ styles.Top }>
                    <img src={ user.coverPicture || `${PF}person/noAvatar.png`} alt="person" />

                    <input
                        className={ styles.Input }
                        type="text"
                        placeholder={`What is in your mind ${ user.username } ?`}
                        ref={ desc }
                    />
                </section>

                <hr className={ styles.Hr }/>

                {
                    file && (
                        <article className={ styles.ShareImgWrapper }>
                            <img
                                className={ styles.ShareImg}
                                src={ URL.createObjectURL(file)}
                                alt="cover"
                            />

                            <Cancel className={ styles.ShareCancelImg} onClick={ () => setFile(null)} />
                        </article>
                    )
                }

                <form className={ styles.Bottom } onSubmit={ handleSubmit }>
                    <div className={ styles.Options }>
                        <label htmlFor="file" className={ styles.Option }>
                            <PermMedia htmlColor='tomato' className={ styles.Icon } />

                            <span className={ styles.OptionText }>
                                Photo or Video
                            </span>

                            <input
                                type="file"
                                id="file"
                                accept=".png,.jpeg,.jpg"
                                onChange={ (e) => setFile(e.target.files[0])}
                                style={{display: "none"}}
                            />
                        </label>
                        <div className={ styles.Option }>
                            <Label htmlColor='blue' className={ styles.Icon } />

                            <span className={ styles.OptionText }>
                                Tag
                            </span>
                        </div>
                        <div className={ styles.Option }>
                            <Room htmlColor='green' className={ styles.Icon } />

                            <span className={ styles.OptionText }>
                                Location
                            </span>
                        </div>
                        <div className={ styles.Option }>
                            <EmojiEmotions htmlColor='goldenrod' className={ styles.Icon } />

                            <span className={ styles.OptionText }>
                                Feelings
                            </span>
                        </div>
                    </div>

                    <div className={styles.OptionButton}>
                        <button type='submit'>Share</button>
                    </div>
                </form>
            </div>
        </article>
    )
}

export default Share
