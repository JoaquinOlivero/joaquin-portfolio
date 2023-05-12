import styles from '../../styles/Home/Home.module.scss'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Intro from './components/Intro'
import Projects from './components/Projects'

function Home() {
    return (
        <div className={styles.container}>
            <Intro />
            <AboutMe />
            <Projects />
            <Contact />
        </div>
    )
}

export default Home