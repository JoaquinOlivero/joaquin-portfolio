import Image from 'next/image'
import styles from '../../../styles/Home/components/AboutMe.module.scss'
import { useRef, useEffect } from 'react'

function AboutMe() {
    const aboutMeRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const aboutMeObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio <= 0.5) {
                    document.getElementById('aboutMeSideNavbar').setAttribute('style', 'opacity: 0.2')
                } else if (entry.intersectionRatio >= 0.5) {
                    document.getElementById('aboutMeSideNavbar').setAttribute('style', 'opacity: 0.7; color: rgb(26, 161, 155); font-weight: 500')
                }
            })
        }, { threshold: [0.0, 0.5] })

        aboutMeObserver.observe(aboutMeRef.current)

        return () => {
            aboutMeObserver.unobserve(aboutMeRef.current)
        }
    }, [])

    return (
        <div className={styles.AboutMe} id='aboutMe' ref={aboutMeRef}>
            <div className={styles.AboutMe_content}>
                <div>
                    <h2>About Me</h2>
                    <div className={styles.AboutMe_paragraphs}>
                        <p>Hello! I'm a self taught, full-stack web developer that has been enjoying <span style={{ fontWeight: 600, fontStyle: 'italic' }}>JavaScript</span> for the last year.</p>
                        <p>My journey into software development began as a hobby. At some point in 2020, browsing in the immensity of the internet, I came upon a free Python course for beginners and took it. Considering that my knowledge of programming was non-existent, the course resulted to be very challenging. However, the constant challenge even though frustrating at times and building sort of simple useful scripts with Python were the things that hooked me into programming, even as a side thing, as a hobby.</p>
                        <p>Fast forward to 2021, with basic/hobby-like knowledge of Python I realized that I wanted to pursue a career in this field. However, rather than Python, I decided to fully invest my time into learning <span style={{ fontWeight: 600, fontStyle: 'italic' }}>JavaScript</span> to become a dev.</p>
                        <p>Today, I am proud to be a Self Taught Developer, and what I love about it is the never ending learning experience that this field has, that allows to continually improve upon oneself.</p>
                        <p>Throughout this time, I have learnt from many different sources such as freeCodeCamp, Udemy (Colt Steele), Stack Overflow and GitHub.</p>
                    </div>
                </div>

                <div className={styles.AboutMe_skills}>
                    <h2>Skills</h2>
                    <div className={styles.AboutMe_techstack}>
                        <div>
                            <h3>Languages</h3>
                            <ul>
                                <li><Image width={25} height={20} src="https://cdn.worldvectorlogo.com/logos/golang-1.svg" alt="Golang" />Golang</li>
                                <li><Image width={25} height={20} src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png" alt="TypeScript" />TypeScript</li>
                                <li><Image width={25} height={20} src="https://cdn-icons-png.flaticon.com/512/337/337953.png" alt="SQL" />SQL</li>
                                <li><Image width={25} height={20} src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="JavaScript" />JavaScript</li>
                                <li><Image width={25} height={20} src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="HTML" />HTML</li>
                                <li><Image width={25} height={20} src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="CSS" />CSS</li>
                                <li><Image width={25} height={20} src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png" alt="Python" />Python</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Frameworks/Tools</h3>
                            <ul>
                                <li> <Image width={25} height={20} src="https://cdn.worldvectorlogo.com/logos/next-js.svg" alt="Next.js" /> Next.js</li>
                                <li> <Image width={25} height={20} src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="React" /> React</li>
                                <li> <Image width={25} height={20} src="https://cdn.worldvectorlogo.com/logos/electron-1.svg" alt="Electron" /> Electron</li>
                                <li> <Image width={25} height={20} src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png" alt="Node.js" /> Node.js</li>
                                <li> <Image width={25} height={20} src="https://cdn-icons-png.flaticon.com/512/5968/5968358.png" alt="SASS" /> SASS</li>
                                <li> <Image width={25} height={20} src="https://1000logos.net/wp-content/uploads/2017/03/LINUX-LOGO.png" alt="Linux" /> Linux</li>
                                <li> <Image width={25} height={20} src="https://cdn.worldvectorlogo.com/logos/docker.svg" alt="Docker" /> Docker</li>
                                <li> <Image width={25} height={20} src="https://cdn.worldvectorlogo.com/logos/git-icon.svg" alt="Git" /> Git</li>
                                <li> <Image width={25} height={20} src="https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" alt="GitHub" /> GitHub</li>
                                <li> <Image width={25} height={20} src="/images/cloudflare-icon-512x512-c1lpcyo0.png " alt="CloudFlare" /> CloudFlare</li>
                                <li> <Image width={25} height={20} src="https://caddyserver.com/resources/images/caddy-circle-lock.svg" alt="Caddy" /> Caddy</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Databases</h3>
                            <ul>
                                <li> <Image width={25} height={20} src="https://cdn.worldvectorlogo.com/logos/postgresql.svg" alt="PostgreSQL" /> PostgreSQL</li>
                                <li> <Image width={25} height={20} src="https://cdn.icon-icons.com/icons2/2699/PNG/512/sqlite_logo_icon_169724.png" alt="SQLite" /> SQLite</li>
                                <li> <Image width={25} height={20} src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" alt="MongoDB" /> MongoDB</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Other</h3>
                            <ul>
                                <li> <Image width={25} height={20} src="https://cdn-icons-png.flaticon.com/512/197/197593.png" alt="Spanish" /> Spanish</li>
                                <li> <Image width={25} height={20} src="https://cdn-icons-png.flaticon.com/512/197/197374.png" alt="English" /> English</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe