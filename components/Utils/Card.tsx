import styles from "../../styles/Utils/CardsCarrousel/Card.module.scss"
import Image from "next/image"
import Link from "next/link"
import { forwardRef, useEffect, useRef } from "react"

type Props = {
    name: string
    description: string
    languages: Array<string>
    website?: string
    websiteBtnText?: string
    github: string
    colors: Array<string>
    image?: string
    video?: string
}

const Card = forwardRef<HTMLDivElement, Props>(({ name, description, languages, website, websiteBtnText, github, colors, image, video }: Props, ref) => {
    const imageRef = useRef<HTMLDivElement>(null)
    const videoRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    const mouseEnterBtn = (element: HTMLAnchorElement) => {
        element.setAttribute("style", `background-color: ${colors[1]};`)
    }

    const mouseLeaveBtn = (element: HTMLAnchorElement) => {
        element.setAttribute("style", `background-color: ${colors[0]};`)
    }

    useEffect(() => {
        if (image && video && imageRef.current && videoRef.current && contentRef.current) {
            let video = false
            setInterval(function () {
                contentRef.current.scrollTo({
                    top: video ? imageRef.current.offsetTop : videoRef.current.offsetTop,
                    left: 0,
                    behavior: "smooth",
                })

                video ? video = false : video = true

            }, 16000)
        }
    }, [image, video])


    return (
        <div className={styles.Card_container} ref={ref}>
            <div className={styles.Card_content}>
                <div className={styles.Card_left}>

                    <div className={styles.Card_left_title}>
                        {name}
                    </div>
                    <div className={styles.Card_left_stack}>
                        {languages.map((language: string, index: number) => {
                            return <span key={index}>{index != (languages.length - 1) ? `${language} -` : language} </span>
                        })}
                    </div>
                    <div className={styles.Card_left_paragraph}>
                        {description}
                    </div>
                    <div className={styles.Card_left_btns}>
                        {website &&
                            <Link href={website} onMouseEnter={(e) => mouseEnterBtn(e.currentTarget)} onMouseLeave={(e) => mouseLeaveBtn(e.currentTarget)} target='_blank' rel="noopener noreferrer" style={{ backgroundColor: colors[0] }}>{websiteBtnText ? websiteBtnText : "Website"}</Link>
                        }
                        <Link href={`https://github.com/${github}`} onMouseEnter={(e) => mouseEnterBtn(e.currentTarget)} onMouseLeave={(e) => mouseLeaveBtn(e.currentTarget)} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: colors[0] }}>GitHub</Link>
                    </div>
                </div>
                {image && !video &&
                    <div className={styles.Card_right} style={{ background: `linear-gradient(180deg, ${colors[0]} 0%, ${colors[1]} 100%)` }}>
                        <div className={styles.Card_right_image_container}>
                            <Image src={image} fill={true} alt={name} priority={true} />
                        </div>
                    </div>
                }

                {video && !image &&
                    <div className={styles.Card_right} style={{ background: `linear-gradient(180deg, ${colors[0]} 0%, ${colors[1]} 100%)` }}>
                        <div className={styles.Card_right_video_container}>
                            <iframe src={video} height="100%" width="100%"></iframe>
                        </div>
                    </div>
                }

                {video && image &&
                    <div className={styles.Card_right_twitcher} style={{ background: `linear-gradient(180deg, ${colors[0]} 0%, ${colors[1]} 100%)` }}>
                        <div className={styles.Card_twitcher_content} ref={contentRef}>
                            <div className={styles.Card_right_image_container} ref={imageRef}>
                                <Image src={image} fill={true} alt={name} priority={true} />
                            </div>
                            <div className={styles.Card_right_video_container} ref={videoRef}>
                                <iframe src={video} height="100%" width="100%"></iframe>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
})

Card.displayName = "Card"

export default Card