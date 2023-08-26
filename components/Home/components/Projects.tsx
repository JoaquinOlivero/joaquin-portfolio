import { useRef, useEffect, useState } from 'react';
import styles from '../../../styles/Home/components/Projects.module.scss'
import CardsCarrousel from '../../Utils/CardsCarrousel';
import Card from '../../Utils/Card';

function Projects() {
    const projectsRef = useRef<HTMLDivElement>(null)
    const [streamUrl, setStreamUrl] = useState<string | null>(null)

    // Observers
    useEffect(() => {
        // check environment mode to set streamUrl
        if (process.env.NODE_ENV == "development") {
            setStreamUrl('https://player.twitch.tv/?channel=beats10&parent=portfolio.joaquinolivero.com&muted=true')
        }

        if (process.env.NODE_ENV == "production") {
            setStreamUrl('https://player.twitch.tv/?channel=beats10&parent=joaquinolivero.com&muted=true')
        }

        // Main project page observer for the right sideNavbar.
        const projectsObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio <= 0.5) {
                    document.getElementById('projectsSideNavbar').setAttribute('style', 'opacity: 0.2')
                } else if (entry.intersectionRatio >= 0.5) {
                    document.getElementById('sideNavbar').setAttribute('style', 'transform: translateX(0); opacity: 1')
                    document.getElementById('projectsSideNavbar').setAttribute('style', 'opacity: 0.7; color: rgb(26, 161, 155); font-weight: 500')
                }
            })
        }, { threshold: [0.0, 0.5] })

        projectsObserver.observe(projectsRef.current)

        return () => {
            projectsObserver.unobserve(projectsRef.current)
        }
    }, [])

    return (
        <div className={styles.Projects} id='projects' ref={projectsRef}>
            <h2>Projects</h2>
            <CardsCarrousel />
            <h2>Currently Working On</h2>
            <div className={styles.Projects_extra}>
                <Card
                    name='Twitcher'
                    website='https://www.twitch.tv/beats10'
                    websiteBtnText='Twitch'
                    description='Automated 24/7 web-GUI broadcast software with live preview.'
                    languages={["Go", "Next.js", "FFmpeg", "SQLite", "gRPC", "webRTC"]}
                    github='JoaquinOlivero/Twitcher'
                    colors={["#00ADD8", "#007997"]}
                    video={streamUrl}
                    image='images/1b.gif'
                />
            </div>
        </div>
    )
}

export default Projects