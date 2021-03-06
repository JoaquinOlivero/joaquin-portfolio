import { useRef, useEffect } from 'react'
import styles from '../../../styles/Home/components/Intro.module.scss'

function Intro() {
    const introRef = useRef()

    useEffect(() => {
        const introObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0.1 && entry.intersectionRatio <= 0.4) {
                    document.getElementById('sideNavbar').setAttribute('style', 'display: flex')
                    setTimeout(() => {
                        document.getElementById('sideNavbar').setAttribute('style', 'transform: translateX(0%)')
                    }, 50);
                } else if (entry.intersectionRatio >= 0.4) {
                    document.getElementById('sideNavbar').setAttribute('style', 'transform: translateX(200%)')
                    setTimeout(() => {
                        document.getElementById('sideNavbar').setAttribute('style', 'display: none')
                    }, 210);
                }
            })
        }, { threshold: [0.0, 0.4] })

        introObserver.observe(introRef.current)

        return () => {
            introObserver.unobserve(introRef.current)
        }
    }, [])

    return (
        <div className={styles.Intro} ref={introRef}>
            <div className={styles.first}>Hello, my name is <span>Joaquin Olivero</span></div>
            <div className={styles.second}>I am a full stack developer.</div>
        </div>
    )
}

export default Intro