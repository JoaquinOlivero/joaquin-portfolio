import Link from 'next/link'
import styles from '../../styles/PersonalLinks/PersonalLinks.module.scss'
import Image from 'next/image'

const PersonalLinks = () => {
    return (
        <div className={styles.PersonalLinks} id='personalLinks'>
            <Link href="https://github.com/JoaquinOlivero" target='_blank' rel="noopener noreferrer">
                <Image width={25} height={25} src="https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" alt="" />
            </Link>
            <Link href="https://www.linkedin.com/in/joaquin-olivero-32608a235/" target='_blank' rel="noopener noreferrer">
                <Image width={25} height={25} src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg" alt="" />
            </Link>
        </div>
    )
}

export default PersonalLinks