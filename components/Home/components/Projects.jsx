import styles from '../../../styles/Home/components/Projects.module.scss'

function Projects() {
    return (
        <div className={styles.Projects}>
            <h2>Projects</h2>
            <div className={styles.Projects_cards_container}>

                {/* NOTECLOUD */}
                <div className={styles.Projects_card_container}>
                    <div className={styles.Projects_urls}>
                        <a href="https://notecloud.xyz" target="_blank">Website</a>
                        <a href="https://github.com/JoaquinOlivero/notecloud" target="_blank">Github Repo</a>
                    </div>
                    <div className={styles.Projects_card_content}>
                        <div className={styles.Projects_card_left}>
                            <div className={styles.Projects_card_left_title}>
                                NoteCloud
                            </div>
                            <div className={styles.Projects_card_left_stack}>
                                <span>Stack:</span>
                                <img src="https://cdn.worldvectorlogo.com/logos/postgresql.svg" alt="" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" alt="" />
                                <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="" />
                                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png" alt="" />
                            </div>
                        </div>
                        <div className={styles.Projects_card_right}>
                            <p>NoteCloud is my favourite and latest project. It's a note taking web application inspired on <a href="https://notion.so" target="_blank">notion.so</a>. It uses <a href='https://editorjs.io/' target="_blank">Editor.js</a> which is a Block-Styled editor.
                                Once you login, it has many features, for example:
                            </p>
                            <p>It shows all the created notes and their children in a nested tree view.
                                Notes and their children can be exported to PDF with a single click.
                                It has a quick search bar that goes through all personal notes.
                                It has the option to create groups and share notes in real time with other users and a
                                real time notification system. Check the website or github repo if you'd like to know more.
                            </p>
                        </div>
                    </div>
                </div>

                {/* MOVIECRIT */}
                <div className={styles.Projects_card_container}>
                    <div className={styles.Projects_urls}>
                        <a href="https://moviecrit.xyz" target="_blank">Website</a>
                        <a href="https://github.com/JoaquinOlivero/moviecrit" target="_blank">Github Repo</a>
                    </div>
                    <div className={styles.Projects_card_content}>
                        <div className={styles.Projects_card_left}>
                            <div className={styles.Projects_card_left_title}>
                                MovieCrit
                            </div>
                            <div className={styles.Projects_card_left_stack}>
                                <span>Stack:</span>
                                <img src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" alt="" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" alt="" />
                                <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="" />
                                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png" alt="" />
                            </div>
                        </div>
                        <div className={styles.Projects_card_right}>

                        </div>
                    </div>
                </div>

                {/* FOODIEMAKERS */}
                <div className={styles.Projects_card_container} style={{ marginBottom: '30px' }}>
                    <div className={styles.Projects_urls}>
                        <a href="https://notecloud.xyz" target="_blank">Website</a>
                        <a href="https://github.com/JoaquinOlivero/notecloud" target="_blank">Github Repo</a>
                    </div>
                    <div className={styles.Projects_card_content}>
                        <div className={styles.Projects_card_left}>
                            <div className={styles.Projects_card_left_title} style={{ fontSize: '32px' }}>
                                FoodieMakers
                            </div>
                            <div className={styles.Projects_card_left_stack}>
                                <span>Stack:</span>
                                <img src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" alt="" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" alt="" />
                                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png" alt="" />
                            </div>
                        </div>
                        <div className={styles.Projects_card_right}>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects