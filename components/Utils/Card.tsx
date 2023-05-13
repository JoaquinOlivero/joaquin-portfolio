import styles from "../../styles/Utils/CardsCarrousel/Card.module.scss"
import Image from "next/image"
import Link from "next/link"
import { forwardRef, useEffect } from "react"

type Props = {
    name: string
    description: string
    languages: Array<string>
    website?: string
    github: string
    colors: Array<string>
    image: string
}

const Card = forwardRef<HTMLDivElement, Props>(({ name, description, languages, website, github, colors, image }: Props, ref) => {

    const mouseEnterBtn = (element: HTMLAnchorElement) => {
        element.setAttribute("style", `background-color: ${colors[1]};`)
    }

    const mouseLeaveBtn = (element: HTMLAnchorElement) => {
        element.setAttribute("style", `background-color: ${colors[0]};`)
    }

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
                            <Link href={website} onMouseEnter={(e) => mouseEnterBtn(e.currentTarget)} onMouseLeave={(e) => mouseLeaveBtn(e.currentTarget)} target='_blank' rel="noopener noreferrer" style={{ backgroundColor: colors[0] }}>Website</Link>
                        }
                        <Link href={`https://github.com/${github}`} onMouseEnter={(e) => mouseEnterBtn(e.currentTarget)} onMouseLeave={(e) => mouseLeaveBtn(e.currentTarget)} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: colors[0] }}>GitHub</Link>
                    </div>
                </div>
                <div className={styles.Card_right} style={{ background: `linear-gradient(180deg, ${colors[0]} 0%, ${colors[1]} 100%);` }}>
                    <div className={styles.Card_right_image_container}>
                        <Image src={image} fill={true} alt={name} />
                    </div>
                </div>
            </div>
        </div>

    )
})

export default Card