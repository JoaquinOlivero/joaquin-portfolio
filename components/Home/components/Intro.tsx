import { useRef, useEffect } from 'react'
import styles from '../../../styles/Home/components/Intro.module.scss'

function Intro() {
    const introRef = useRef<HTMLDivElement>()

    useEffect(() => {
        const introObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0.1 && entry.intersectionRatio <= 0.4) {
                    // document.getElementById('sideNavbar').setAttribute('style', 'display: flex')
                    document.getElementById('personalLinks').setAttribute('style', 'opacity: 0.7; color: rgb(26, 161, 155); font-weight: 500')
                    // setTimeout(() => {
                    //     document.getElementById('sideNavbar').setAttribute('style', 'transform: translateX(0%)')
                    // }, 50);
                } else if (entry.intersectionRatio >= 0.4) {
                    // document.getElementById('sideNavbar').setAttribute('style', 'transform: translateX(200%)')
                    document.getElementById('personalLinks').setAttribute('style', 'opacity: 0;')
                    document.getElementById('sideNavbar').setAttribute('style', 'transform: translateX(200%); opacity: 1;')
                    // setTimeout(() => {
                    // }, 210);
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