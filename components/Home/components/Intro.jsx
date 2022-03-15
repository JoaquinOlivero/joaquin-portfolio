import styles from '../../../styles/Home/components/Intro.module.scss'

function Intro() {
    return (
        <div className={styles.Intro}>
            <div className={styles.first}>Hello, my name is <span>Joaquin Olivero</span></div>
            <div className={styles.second}>I am a full stack developer.</div>
        </div>
    )
}

export default Intro