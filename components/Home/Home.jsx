import styles from '../../styles/Home/Home.module.scss'
import AboutMe from './components/AboutMe'
import Intro from './components/Intro'
import Projects from './components/Projects'

function Home() {
    return (
        <div className={styles.container}>
            <Intro />
            <AboutMe />
            <Projects />
        </div>
    )
}

export default Home