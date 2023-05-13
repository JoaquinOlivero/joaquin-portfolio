import { useRef, useEffect } from 'react';
import styles from '../../../styles/Home/components/Projects.module.scss'
import CardsCarrousel from '../../Utils/CardsCarrousel';

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
            <div className={styles.Projects_extra}>
                <h2>Currently Working On</h2>
            </div>

        </div>
    )
}

export default Projects