import styles from '../../styles/Footer/Footer.module.scss'

function Footer() {
    return (
        <div className={styles.Footer}>
            <div className={styles.Footer_content}>

                <div className={styles.Footer_content_logo}>
                    JO
                </div>

                <div className={styles.Footer_content_social}>
                    <a href="https://github.com/JoaquinOlivero" target='_blank' rel="noopener noreferrer"><img src="https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" alt="" /></a>
                    <a href="https://www.linkedin.com/in/joaquin-olivero-32608a235/" target='_blank' rel="noopener noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/61/61109.png" alt="" /></a>
                </div>

            </div>
        </div>
    )
}

export default Footer