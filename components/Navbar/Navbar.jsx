import { useRef } from 'react/cjs/react.development';
import styles from '../../styles/Navbar/Navbar.module.scss'

function Navbar() {
    const menuRef = useRef(null)

    const mouseEnterMenu = (e) => {
        menuRef.current.childNodes.forEach(element => {
            element !== e && element.setAttribute('style', 'color: gray; opacity: 0.2')
        });
    }

    const mouseLeaveMenu = () => {
        menuRef.current.childNodes.forEach(element => {
            element.setAttribute('style', 'color: black; opacity: 1')
        });
    }

    return (
        <div className={styles.container}>
            <div className={styles.Navbar_content}>

                <div className={styles.Navbar_content_logo}>
                    JO
                </div>

                <div className={styles.Navbar_content_menu} ref={menuRef} >
                    <div onMouseEnter={(e) => mouseEnterMenu(e.target)} onMouseLeave={mouseLeaveMenu}>About Me</div>
                    <div onMouseEnter={(e) => mouseEnterMenu(e.target)} onMouseLeave={mouseLeaveMenu}>Projects</div>
                    <div onMouseEnter={(e) => mouseEnterMenu(e.target)} onMouseLeave={mouseLeaveMenu}>Contact</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar