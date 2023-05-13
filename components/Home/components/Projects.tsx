import { useRef, useEffect } from 'react';
import styles from '../../../styles/Home/components/Projects.module.scss'
import Image from 'next/image';
import Link from 'next/link';

function Projects() {
    const projectsRef = useRef<HTMLDivElement>(null)
    const cardsContainerRef = useRef<HTMLDivElement>(null)
    const foodiemakersRef = useRef<HTMLDivElement>(null)
    const mcmanagerRef = useRef<HTMLDivElement>(null)
    const notecloudRef = useRef<HTMLDivElement>(null)
    const moviecritRef = useRef<HTMLDivElement>(null)

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


        // Single projects observers.
        // FooideMakers observer
        const foodiemakersOberserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio <= 0.5) {
                    document.getElementById('foodiemakers').setAttribute('style', 'opacity: 0.2')
                } else if (entry.intersectionRatio >= 0.5) {
                    document.getElementById('foodiemakers').setAttribute('style', 'opacity: 0.7; background-color: rgb(26, 161, 155); transform: scale(1.05);')
                }
            });
        }, { threshold: [0.0, 0.5] })

        foodiemakersOberserver.observe(foodiemakersRef.current)

        // MCManager observer
        const mcmanagerOberserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio <= 0.5) {
                    document.getElementById('mcmanager').setAttribute('style', 'opacity: 0.2')
                } else if (entry.intersectionRatio >= 0.5) {
                    document.getElementById('mcmanager').setAttribute('style', 'opacity: 0.7; background-color: rgb(26, 161, 155); transform: scale(1.05);')
                }
            });
        }, { threshold: [0.0, 0.5] })

        mcmanagerOberserver.observe(mcmanagerRef.current)

        // Notecloud observer
        const notecloudOberserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio <= 0.5) {
                    document.getElementById('notecloud').setAttribute('style', 'opacity: 0.2')
                } else if (entry.intersectionRatio >= 0.5) {
                    document.getElementById('notecloud').setAttribute('style', 'opacity: 0.7; background-color: rgb(26, 161, 155); transform: scale(1.05);')
                }
            });
        }, { threshold: [0.0, 0.5] })

        notecloudOberserver.observe(notecloudRef.current)



        // Moviecrit observer
        const moviecritOberserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio <= 0.5) {
                    document.getElementById('moviecrit').setAttribute('style', 'opacity: 0.2')
                } else if (entry.intersectionRatio >= 0.5) {
                    document.getElementById('moviecrit').setAttribute('style', 'opacity: 0.7; background-color: rgb(26, 161, 155); transform: scale(1.05);')
                }
            });
        }, { threshold: [0.0, 0.5] })

        moviecritOberserver.observe(moviecritRef.current)

        return () => {
            projectsObserver.unobserve(projectsRef.current)

            foodiemakersOberserver.unobserve(foodiemakersRef.current)
            mcmanagerOberserver.unobserve(mcmanagerRef.current)
            notecloudOberserver.unobserve(notecloudRef.current)
            moviecritOberserver.unobserve(moviecritRef.current)
        }
    }, [])

    const handleClickOnItem = (ref: HTMLDivElement) => {
        cardsContainerRef.current.scrollTo({
            top: ref.offsetTop,
            left: 0,
            behavior: "smooth",
        })
    }

    return (
        <div className={styles.Projects} id='projects' ref={projectsRef}>
            <h2>Projects</h2>
            <div className={styles.Projects_container}>

                <div className={styles.Projects_cards_container_dots}>
                    <div onClick={() => handleClickOnItem(foodiemakersRef.current)} id='foodiemakers'></div>
                    <div onClick={() => handleClickOnItem(mcmanagerRef.current)} id='mcmanager'></div>
                    <div onClick={() => handleClickOnItem(notecloudRef.current)} id='notecloud'></div>
                    <div onClick={() => handleClickOnItem(moviecritRef.current)} id='moviecrit'></div>
                </div>

                <div className={styles.Projects_cards_container} ref={cardsContainerRef}>

                    {/* FoodieMakers */}
                    <div className={styles.Projects_card_container} ref={foodiemakersRef}>
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
                                    <Image src='/images/foodiemakers-resized.png' fill={true} alt='notecloud' />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* MCManager */}
                    <div className={styles.Projects_card_container} ref={mcmanagerRef}>
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
                                    <Image src='/images/mcmanager-resized.png' fill={true} alt='notecloud' />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* NOTECLOUD */}
                    <div className={styles.Projects_card_container} ref={notecloudRef}>
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
                                    <Image src='/images/notecloud-resized.png' fill={true} alt='notecloud' />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* MOVIECRIT */}
                    <div className={styles.Projects_card_container} ref={moviecritRef}>
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
                                    <Image src='/images/moviecrit-resized.png' fill={true} alt='moviecrit' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.Projects_extra}>
                <h2>Currently Working On</h2>
            </div>

        </div>
    )
}

export default Projects