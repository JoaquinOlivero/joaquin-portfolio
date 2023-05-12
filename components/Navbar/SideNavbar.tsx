import { useRef } from 'react';
import styles from '../../styles/Navbar/SideNavbar.module.scss'

function SideNavBar() {
    const menuRef = useRef<HTMLHeadingElement>(null)

    const handleClickOnItem = (itemId: string) => {
        const element = document.getElementById(itemId)
        element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
    }

    return (
        <div className={styles.SideNavbar} id='sideNavbar'>
            <div className={styles.SideNavbar_content_menu} ref={menuRef}>
                <div onClick={() => handleClickOnItem('aboutMe')} id='aboutMeSideNavbar'>About Me</div>
                <div onClick={() => handleClickOnItem('projects')} id='projectsSideNavbar'>Projects</div>
                <div onClick={() => handleClickOnItem('contact')} id='contactSideNavbar'>Contact</div>
            </div>
        </div>
    )
}

export default SideNavBar