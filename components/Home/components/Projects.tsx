import { useRef, useEffect } from 'react';
import styles from '../../../styles/Home/components/Projects.module.scss'
import Image from 'next/image';
import Link from 'next/link';

function Projects() {
    const projectsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
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
            <div className={styles.Projects_cards_container}>
                {/* FoodieMakers */}
                <div className={styles.Projects_card_container}>
                    <div className={styles.Projects_card_content}>
                        <div className={styles.Projects_card_left}>

                            <div className={styles.Projects_card_left_title}>
                                FoodieMakers
                            </div>
                            <div className={styles.Projects_card_left_stack}>
                                Go - Next.js - PostgreSQL
                            </div>
                            <div className={styles.Projects_card_left_paragraph}>
                                Marketplace for food manufacturers.
                            </div>
                            <div className={styles.Projects_card_left_btns} id={styles.Projects_card_left_btns_foodiemakers}>
                                <Link href="https://fm.joaquinolivero.com" target='_blank' rel="noopener noreferrer">Website</Link>
                                <Link href="https://github.com/JoaquinOlivero/FoodieMakersGo" target="_blank" rel="noopener noreferrer">GitHub</Link>
                            </div>
                        </div>
                        <div className={styles.Projects_card_right} id={styles.foodiemakers_card_right_background}>
                            <div className={styles.Projects_card_right_image_container}>
                                <Image src='/images/foodiemakers.png' fill={true} style={{ objectFit: "cover", objectPosition: "0% 0%" }} alt='notecloud' />
                            </div>
                        </div>
                    </div>
                </div>
                {/* MCManager */}
                <div className={styles.Projects_card_container}>
                    <div className={styles.Projects_card_content}>
                        <div className={styles.Projects_card_left}>

                            <div className={styles.Projects_card_left_title}>
                                MCManager
                            </div>
                            <div className={styles.Projects_card_left_stack}>
                                Go - Next.js - SQLite
                            </div>
                            <div className={styles.Projects_card_left_paragraph}>
                                Minecraft server manager with easy-to-use UI.
                            </div>
                            <div className={styles.Projects_card_left_btns} id={styles.Projects_card_left_btns_mcmanager}>
                                <Link href="https://github.com/JoaquinOlivero/MCManager" target="_blank" rel="noopener noreferrer">GitHub</Link>
                            </div>
                        </div>
                        <div className={styles.Projects_card_right} id={styles.mcmanager_card_right_background}>
                            <div className={styles.Projects_card_right_image_container}>
                                <Image src='/images/mcmanager.png' fill={true} style={{ objectFit: "cover", objectPosition: "0% 0%" }} alt='notecloud' />
                            </div>
                        </div>
                    </div>
                </div>
                {/* NOTECLOUD */}
                <div className={styles.Projects_card_container}>
                    <div className={styles.Projects_card_content}>
                        <div className={styles.Projects_card_left}>

                            <div className={styles.Projects_card_left_title}>
                                NoteCloud
                            </div>
                            <div className={styles.Projects_card_left_stack}>
                                Nodejs - React - Express - PostgreSQL
                            </div>
                            <div className={styles.Projects_card_left_paragraph}>
                                Real-time note sharing web application.
                            </div>
                            <div className={styles.Projects_card_left_btns} id={styles.Projects_card_left_btns_notecloud}>
                                <Link href="https://notecloud.joaquinolivero.com" target='_blank' rel="noopener noreferrer">Website</Link>
                                <Link href="https://github.com/JoaquinOlivero/notecloud" target="_blank" rel="noopener noreferrer">GitHub</Link>
                            </div>
                        </div>
                        <div className={styles.Projects_card_right} id={styles.notecloud_card_right_background}>
                            <div className={styles.Projects_card_right_image_container}>
                                <Image src='/images/notecloud-projects_rixl6i.png' fill={true} style={{ objectFit: "cover", objectPosition: "0% 0%" }} alt='notecloud' />
                            </div>
                        </div>
                    </div>
                </div>
                {/* MOVIECRIT */}
                <div className={styles.Projects_card_container} >
                    <div className={styles.Projects_card_content}>
                        <div className={styles.Projects_card_left}>

                            <div className={styles.Projects_card_left_title}>
                                MovieCrit
                            </div>
                            <div className={styles.Projects_card_left_stack}>
                                Nodejs - React - Express - MongoDB
                            </div>
                            <div className={styles.Projects_card_left_paragraph}>
                                Movie review website.
                            </div>
                            <div className={styles.Projects_card_left_btns} id={styles.Projects_card_left_btns_moviecrit}>
                                <Link href="https://moviecrit.joaquinolivero.com" target="_blank" rel="noopener noreferrer">Website</Link>
                                <Link href="https://gitHub.com/JoaquinOlivero/moviecrit" target="_blank" rel="noopener noreferrer">GitHub</Link>
                            </div>
                        </div>
                        <div className={styles.Projects_card_right} id={styles.moviecrit_card_right_background}>
                            <div className={styles.Projects_card_right_image_container}>
                                <Image src='/images/moviecrit-projects_pqbjvk.png' fill={true} style={{ objectFit: "cover", objectPosition: "0% 0%" }} alt='moviecrit' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.Projects_extra}>
            </div>

        </div>
    )
}

export default Projects