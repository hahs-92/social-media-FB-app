import {
    RssFeed,
    Chat,
    PlayCircleFilledOutlined,
    Group,
    Bookmark,
    HelpOutline,
    WorkOutline,
    Event,
    School
} from '@mui/icons-material';
//styles
import styles from '../styles/components/SideBar.styles.module.css'

function SideBar() {
    return (
        <aside className={ styles.SideBar }>
            <div className={ styles.Wrapper }>
                <ul className={ styles.List }>
                    <li className={ styles.ListItem }>
                        <RssFeed className={ styles.Icon } />

                        <span className={ styles.ListItemText}>
                            Feed
                        </span>
                    </li>

                    <li className={ styles.ListItem }>
                        <Chat className={ styles.Icon } />

                        <span className={ styles.ListItemText}>
                            Chats
                        </span>
                    </li>

                    <li className={ styles.ListItem }>
                        <PlayCircleFilledOutlined className={ styles.Icon } />

                        <span className={ styles.ListItemText}>
                            Videos
                        </span>
                    </li>

                    <li className={ styles.ListItem }>
                        <Group className={ styles.Icon } />

                        <span className={ styles.ListItemText}>
                            Groups
                        </span>
                    </li>

                    <li className={ styles.ListItem }>
                        <Bookmark className={ styles.Icon } />

                        <span className={ styles.ListItemText}>
                            BookMarks
                        </span>
                    </li>

                    <li className={ styles.ListItem }>
                        <HelpOutline className={ styles.Icon } />

                        <span className={ styles.ListItemText}>
                            Questions
                        </span>
                    </li>

                    <li className={ styles.ListItem }>
                        <WorkOutline className={ styles.Icon } />

                        <span className={ styles.ListItemText}>
                            Jobs
                        </span>
                    </li>

                    <li className={ styles.ListItem }>
                        <Event className={ styles.Icon } />

                        <span className={ styles.ListItemText}>
                            Events
                        </span>
                    </li>

                    <li className={ styles.ListItem }>
                        <School className={ styles.Icon } />

                        <span className={ styles.ListItemText}>
                            Courses
                        </span>
                    </li>
                </ul>

                <button className={ styles.Button }>
                    Show more
                </button>

                <hr className={ styles.Hr } />

                <ul className={ styles.FriendList}>
                    <li className={ styles.Friend }>
                        <img src="/assets/person/2.jpeg" alt="friend" />

                        <span className={ styles.FriendName}>Daniel Gray</span>
                    </li>

                    <li className={ styles.Friend }>
                        <img src="/assets/person/2.jpeg" alt="friend" />

                        <span className={ styles.FriendName}>Daniel Gray</span>
                    </li>

                    <li className={ styles.Friend }>
                        <img src="/assets/person/2.jpeg" alt="friend" />

                        <span className={ styles.FriendName}>Daniel Gray</span>
                    </li>

                    <li className={ styles.Friend }>
                        <img src="/assets/person/2.jpeg" alt="friend" />

                        <span className={ styles.FriendName}>Daniel Gray</span>
                    </li>

                    <li className={ styles.Friend }>
                        <img src="/assets/person/2.jpeg" alt="friend" />

                        <span className={ styles.FriendName}>Daniel Gray</span>
                    </li>

                    <li className={ styles.Friend }>
                        <img src="/assets/person/2.jpeg" alt="friend" />

                        <span className={ styles.FriendName}>Daniel Gray</span>
                    </li>

                    <li className={ styles.Friend }>
                        <img src="/assets/person/2.jpeg" alt="friend" />

                        <span className={ styles.FriendName}>Daniel Gray</span>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default SideBar
