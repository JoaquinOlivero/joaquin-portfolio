import { useRef, useEffect } from 'react';
import styles from '../../../styles/Home/components/Projects.module.scss'
import Image from 'next/image';

function Projects() {
    const projectsRef = useRef(null)

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
                {/* NOTECLOUD */}
                <div className={styles.Projects_card_container}>
                    <div className={styles.Projects_card_content}>
                        <div className={styles.Projects_card_left}>

                            <div className={styles.Projects_card_left_title}>
                                NoteCloud
                            </div>
                            <div className={styles.Projects_card_left_stack}>
                                Node - React - Express - PostgreSQL
                            </div>
                            <div className={styles.Projects_card_left_paragraph}>
                                Real-time note sharing web application.
                            </div>
                            <div className={styles.Projects_card_left_btns} id={styles.Projects_card_left_btns_notecloud}>
                                <a href="https://notecloud.xyz" target="_blank" rel="noopener noreferrer">Website</a>
                                <a href="https://github.com/JoaquinOlivero/notecloud" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </div>
                        </div>
                        <div className={styles.Projects_card_right} id={styles.notecloud_card_right_background}>
                            <div className={styles.Projects_card_right_image_container}>
                                <Image src='/images/notecloud-projects_rixl6i.png' layout='fill' objectFit='cover' objectPosition="0% 20%" />
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
                                Node - React - Express - MongoDB
                            </div>
                            <div className={styles.Projects_card_left_paragraph}>
                                Movie review website.
                            </div>
                            <div className={styles.Projects_card_left_btns} id={styles.Projects_card_left_btns_moviecrit}>
                                <a href="https://moviecrit.xyz" target="_blank" rel="noopener noreferrer">Website</a>
                                <a href="https://gitHub.com/JoaquinOlivero/moviecrit" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </div>
                        </div>
                        <div className={styles.Projects_card_right} id={styles.moviecrit_card_right_background}>
                            <div className={styles.Projects_card_right_image_container}>
                                <Image src='/images/moviecrit-projects_pqbjvk.png' layout='fill' objectFit='cover' objectPosition="0% 0%" unoptimized={true} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* FOODIEMAKERS */}
                {/* <div className={styles.Projects_card_container} style={{ marginBottom: '30px' }}>

                    <div className={styles.Projects_card_content}>
                        <div className={styles.Projects_card_left}>
                            <div className={styles.Projects_urls}>
                                <a href="https://foodiemakers.xyz" target="_blank" rel="noopener noreferrer">Website</a>
                                <a href="https://github.com/JoaquinOlivero/foodiemakers" target="_blank" rel="noopener noreferrer">Github Repo</a>
                            </div>
                            <div className={styles.Projects_card_left_title} style={{ fontSize: '32px' }}>
                                FoodieMakers
                            </div>
                            <div className={styles.Projects_card_left_stack}>
                                <span>Stack:</span>
                                <img src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" alt="" />
                                <img src="https://assets.website-files.com/61ca3f775a79ec5f87fcf937/6202fcdee5ee8636a145a41b_1234.png" alt="" />
                                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png" alt="" />
                            </div>
                        </div>
                        <div className={styles.Projects_card_right}>
                            <p>FoodieMakers is a sort of marketplace for food manufacturers. Registered users can create publications offering products. A publication contains images, a product price, a product description and a button to contact the seller. In addition, each publication has a user review and rating system.
                                Users interested in a product can contact the seller through real-time messaging.
                            </p>
                            <p>If you'd like a more detailed explanation of the website features, I recommend you to visit the GitHub repo. &#128151;</p>
                        </div>
                    </div>
                </div> */}
            </div>
            <div className={styles.Projects_extra}>
                <div className={styles.Projects_current_work_container}>
                    <h3>Currently working on</h3>
                    <div className={styles.Projects_extra_cards}>
                        <div className={styles.Projects_extra_card_container}>
                            <div className={styles.Projects_extra_card_content}>
                                <h4>codePDF</h4>
                                <span>Node - Next.js - Express - PostgreSQL</span>
                                <p>Create and style PDF documents with code.</p>
                                <div className={styles.Projects_extra_card_content_btns}>
                                    <a href="#" target="_blank" rel="noopener noreferrer" style={{ pointerEvents: 'none' }}>Website</a>
                                    <a href="#" target="_blank" rel="noopener noreferrer" style={{ pointerEvents: 'none' }}>GitHub</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.Projects_other_projects_container}>
                    <h3>Other projects</h3>
                    <div className={styles.Projects_extra_cards}>

                        {/* FoodieMakers */}
                        <div className={styles.Projects_extra_card_container}>
                            <div className={styles.Projects_extra_card_content}>
                                <h4>FoodieMakers</h4>
                                <span>Node - EJS - Express - MongoDB</span>
                                <p>Marketplace for food manufacturers.</p>
                                <div className={styles.Projects_extra_card_content_btns}>
                                    <a href="https://foodiemakers.xyz" target="_blank" rel="noopener noreferrer">Website</a>
                                    <a href="https://github.com/JoaquinOlivero/foodiemakers" target="_blank" rel="noopener noreferrer">GitHub</a>
                                </div>
                            </div>
                        </div>

                        {/* Minecraft Launcher */}
                        <div className={styles.Projects_extra_card_container}>
                            <div className={styles.Projects_extra_card_content}>
                                <h4>Minecraft Launcher</h4>
                                <span>Electron.js</span>
                                <p>Personal Minecraft server launcher for Google Cloud Platform VM.</p>
                                <div className={styles.Projects_extra_card_content_btns}>
                                    <a href="https://github.com/JoaquinOlivero/gcpvm-minecraft-launcher" target="_blank" rel="noopener noreferrer">GitHub</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Projects