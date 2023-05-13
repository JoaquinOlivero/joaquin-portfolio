import Link from 'next/link'
import styles from '../../styles/Footer/Footer.module.scss'
import Image from 'next/image'

function Footer() {
    return (
        <div className={styles.Footer}>
            <div className={styles.Footer_content}>

                <div className={styles.Footer_content_logo}>
                    JO
                </div>

                <div className={styles.Footer_content_social}>
                    <Link href="https://github.com/JoaquinOlivero" target='_blank' rel="noopener noreferrer">
                        <Image width={40} height={40} src="https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" alt="" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/joaquin-olivero-32608a235/" target='_blank' rel="noopener noreferrer">
                        <Image width={35} height={40} src="https://cdn-icons-png.flaticon.com/512/61/61109.png" alt="" />
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Footer