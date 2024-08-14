import { useRef, useEffect, useState } from 'react';
import styles from '../../../styles/Home/components/Projects.module.scss'
import CardsCarrousel from '../../Utils/CardsCarrousel';
import Card from '../../Utils/Card';

function Projects() {
    const projectsRef = useRef<HTMLDivElement>(null)

    // Observers
    useEffect(() => {
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
                    name='Jellyseerr'
                    website='https://github.com/Fallenbagel/jellyseerr/pulls?q=author%3AJoaquinOlivero+'
                    websiteBtnText='PRs'
                    description='Jellyseerr is a free and open source software application for managing requests for your media library. It is a fork of Overseerr built to bring support for Jellyfin & Emby media servers!'
                    languages={["Node.js", "TypeScript", "Next.js", "SQLite", "TypeORM"]}
                    github='Fallenbagel/jellyseerr'
                    colors={["#6443DA", "#793DDC"]}
                    image='https://raw.githubusercontent.com/Fallenbagel/jellyseerr/bd4da6d5fc8cb55c2bc3d9a8336787cbd30814d0/public/logo_full.svg'
                />
            </div>
        </div>
    )
}

export default Projects