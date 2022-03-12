import styles from '../../styles/Home/Home.module.scss'
import Intro from './components/Intro'

function Home() {
    return (
        <div className={styles.container}>
            <Intro />
        </div>
    )
}

export default Home