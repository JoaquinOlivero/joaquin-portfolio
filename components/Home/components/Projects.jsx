import { useRef, useEffect } from 'react';
import styles from '../../../styles/Home/components/Projects.module.scss'

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
                            <div className={styles.Projects_urls}>
                                <a href="https://notecloud.xyz" target="_blank" rel="noopener noreferrer">Website</a>
                                <a href="https://github.com/JoaquinOlivero/notecloud" target="_blank" rel="noopener noreferrer">Github Repo</a>
                            </div>
                            <div className={styles.Projects_card_left_title}>
                                NoteCloud
                            </div>
                            <div className={styles.Projects_card_left_stack}>
                                <span>Stack:</span>
                                <img src="https://cdn.worldvectorlogo.com/logos/postgresql.svg" alt="" />
                                <img src="https://assets.website-files.com/61ca3f775a79ec5f87fcf937/6202fcdee5ee8636a145a41b_1234.png" alt="" />
                                <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="" />
                                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png" alt="" />
                            </div>
                        </div>
                        <div className={styles.Projects_card_right}>
                            <p>NoteCloud is my favourite and latest project. It's a note taking web application inspired on <a href="https://notion.so" target="_blank" rel="noopener noreferrer">notion.so</a>. It uses <a href='https://editorjs.io/' target="_blank" rel="noopener noreferrer">Editor.js</a> which is a Block-Styled editor.
                                Once you login, it has many features, for example:
                            </p>
                            <p>It shows all the created notes and their children in a nested tree view.
                                Notes and their children can be exported to PDF with a single click.
                                It has a quick search bar that goes through all personal notes.
                                It has the option to create groups and share notes in real time with other users and a
                                real time notification system. Check the website or the GitHub repo if you'd like to know more. &#128513;
                            </p>
                        </div>
                    </div>
                </div>

                {/* MOVIECRIT */}
                <div className={styles.Projects_card_container}>

                    <div className={styles.Projects_card_content}>
                        <div className={styles.Projects_card_left}>
                            <div className={styles.Projects_urls}>
                                <a href="https://moviecrit.xyz" target="_blank" rel="noopener noreferrer">Website</a>
                                <a href="https://github.com/JoaquinOlivero/moviecrit" target="_blank" rel="noopener noreferrer">Github Repo</a>
                            </div>
                            <div className={styles.Projects_card_left_title}>
                                MovieCrit
                            </div>
                            <div className={styles.Projects_card_left_stack}>
                                <span>Stack:</span>
                                <img src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" alt="" />
                                <img src="https://assets.website-files.com/61ca3f775a79ec5f87fcf937/6202fcdee5ee8636a145a41b_1234.png" alt="" />
                                <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="" />
                                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png" alt="" />
                            </div>
                        </div>
                        <div className={styles.Projects_card_right}>
                            <p>MovieCrit is a movie review web application. It uses <a href="https://themoviedb.org">themoviedb.org</a> API to get the films data. Registered users can write reviews and receive likes. Also, users have a profile page with a photo and their latest reviews.
                            </p>
                            <p>Check out the GitHub repository to learn more about details or go straight to the website. &#128515;</p>
                        </div>
                    </div>
                </div>

                {/* FOODIEMAKERS */}
                <div className={styles.Projects_card_container} style={{ marginBottom: '30px' }}>

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
                </div>

            </div>
        </div>
    )
}

export default Projects