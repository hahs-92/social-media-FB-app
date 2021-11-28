import { useContext } from 'react'
//icons
import {
    PermMedia,
    Label,
    Room,
    EmojiEmotions
} from '@mui/icons-material'
//styles
import styles from '../styles/components/Share.styles.module.css'
//context
import { AuthContext } from '../context/AuthContext'

const PF = process.env.REACT_APP_PUBLIC_FOLDER


const Share = () => {

    const { user } =useContext(AuthContext)

    return (
        <article className={ styles.Share }>
            <div className={ styles.Wrapper}>
                <section className={ styles.Top }>
                    <img src={ user.coverPicture || `${PF}person/noAvatar.png`} alt="person" />

                    <input
                        className={ styles.Input }
                        type="text"
                        placeholder='What is in your mind?'
                    />
                </section>

                <hr className={ styles.Hr }/>

                <section className={ styles.Bottom }>
                    <div className={ styles.Options }>
                        <div className={ styles.Option }>
                            <PermMedia htmlColor='tomato' className={ styles.Icon } />

                            <span className={ styles.OptionText }>
                                Photo or Video
                            </span>
                        </div>
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
                        <button type='button'>Share</button>
                    </div>
                </section>
            </div>
        </article>
    )
}

export default Share
