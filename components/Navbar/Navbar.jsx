import { useRef } from 'react';
import styles from '../../styles/Navbar/Navbar.module.scss'

function Navbar() {
    const menuRef = useRef(null)

    const mouseEnterMenu = (e) => {
        menuRef.current.childNodes.forEach(element => {
            element !== e && element.setAttribute('style', 'opacity: 0.2')
        });
    }

    const mouseLeaveMenu = () => {
        menuRef.current.childNodes.forEach(element => {
            element.setAttribute('style', 'opacity: 1')
        });
    }

    const handleClickOnItem = (itemId) => {
        const element = document.getElementById(itemId)
        element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
    }

    return (
        <div className={styles.container}>
            <div className={styles.Navbar_content}>

                <div className={styles.Navbar_content_logo}>
                    JO
                </div>

                <div className={styles.Navbar_content_menu} ref={menuRef} >
                    <div onMouseEnter={(e) => mouseEnterMenu(e.target)} onMouseLeave={mouseLeaveMenu} onClick={() => handleClickOnItem('aboutMe')}>About Me</div>
                    <div onMouseEnter={(e) => mouseEnterMenu(e.target)} onMouseLeave={mouseLeaveMenu} onClick={() => handleClickOnItem('projects')}>Projects</div>
                    <div onMouseEnter={(e) => mouseEnterMenu(e.target)} onMouseLeave={mouseLeaveMenu}>Contact</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar