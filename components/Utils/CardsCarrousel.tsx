import styles from "../../styles/Utils/CardsCarrousel/CardsCarrousel.module.scss"
import { useEffect, useRef } from "react"
import Card from "./Card"

const CardsCarrousel = () => {
    const cardsContainerRef = useRef<HTMLDivElement>(null)
    const foodiemakersRef = useRef<HTMLDivElement>(null)
    const mcmanagerRef = useRef<HTMLDivElement>(null)
    const notecloudRef = useRef<HTMLDivElement>(null)
    const moviecritRef = useRef<HTMLDivElement>(null)

    // Observers
    useEffect(() => {

        // FoodieMakers observer
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
        <div className={styles.CardsCarrousel_container}>

            <div className={styles.CardsCarrousel_container_dots}>
                <div onClick={() => handleClickOnItem(foodiemakersRef.current)} id='foodiemakers'></div>
                <div onClick={() => handleClickOnItem(mcmanagerRef.current)} id='mcmanager'></div>
                <div onClick={() => handleClickOnItem(notecloudRef.current)} id='notecloud'></div>
                <div onClick={() => handleClickOnItem(moviecritRef.current)} id='moviecrit'></div>
            </div>

            <div className={styles.CardsCarrousel_container} ref={cardsContainerRef}>

                {/* FoodieMakers */}
                <Card
                    ref={foodiemakersRef}
                    name={"foodiemakers"}
                    description='Marketplace for food manufacturers.'
                    languages={["Go", "Next.js", "PostgreSQL"]}
                    website="https://fm.joaquinolivero.com"
                    github='JoaquinOlivero/FoodieMakersGo'
                    colors={["#ff5650", "#ff9900"]}
                    image='/images/foodiemakers-resized.png'
                />

                {/* MCManager */}
                <Card
                    ref={mcmanagerRef}
                    name='mcmanager'
                    description='Minecraft server manager with easy-to-use UI.'
                    languages={["Go", "Next.js", "SQLite"]}
                    github='JoaquinOlivero/MCManager'
                    colors={["#2a263d", "#fe5260"]}
                    image='/images/mcmanager-resized.png'
                />

                {/* NOTECLOUD */}
                <Card
                    ref={notecloudRef}
                    name='notecloud'
                    description='Real-time note sharing application.'
                    languages={["Nodejs", "React", "Express", "PostgreSQL"]}
                    website='https://notecloud.joaquinolivero.com'
                    github='JoaquinOlivero/notecloud'
                    colors={["#1aa19ad0", "#2d3349"]}
                    image='/images/notecloud-resized.png'
                />

                {/* MOVIECRIT */}
                <Card
                    ref={moviecritRef}
                    name='moviecrit'
                    description='Movie review website.'
                    languages={["Nodejs, React, Express, MongoDB"]}
                    website='moviecrit.joaquinolivero.com'
                    github='JoaquinOlivero/moviecrit'
                    colors={["#3081c2", "#a25abf"]}
                    image='/images/moviecrit-resized.png'
                />
            </div>
        </div>
    )
}

export default CardsCarrousel