import styles from "../../styles/Utils/CardsCarrousel/CardsCarrousel.module.scss"
import { useEffect, useRef, useState } from "react"
import Card from "./Card"

const CardsCarrousel = () => {
    const cardsContainerRef = useRef<HTMLDivElement>(null)
    const foodiemakersRef = useRef<HTMLDivElement>(null)
    const mcmanagerRef = useRef<HTMLDivElement>(null)
    const notecloudRef = useRef<HTMLDivElement>(null)
    const moviecritRef = useRef<HTMLDivElement>(null)
    const [currentProject, setCurrentProject] = useState<number>(1)

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

        }
    }, [])

    const handleClickOnItem = (ref: HTMLDivElement, i: number) => {
        setCurrentProject(i)
        cardsContainerRef.current.scrollTo({
            top: ref.offsetTop,
            left: 0,
            behavior: "smooth",
        })
    }

    const handleArrowDown = () => {
        if (currentProject < 4) {
            switch (currentProject) {
                case 1:
                    handleClickOnItem(mcmanagerRef.current, currentProject + 1)
                    break;
                case 2:
                    handleClickOnItem(notecloudRef.current, currentProject + 1)
                    break;
                case 3:
                    handleClickOnItem(moviecritRef.current, currentProject + 1)
                    break;
                default:
                    break;
            }
        }
    }

    const handleArrowUp = () => {
        if (currentProject > 1) {
            switch (currentProject) {
                case 2:
                    handleClickOnItem(foodiemakersRef.current, currentProject - 1)
                    break;
                case 3:
                    handleClickOnItem(mcmanagerRef.current, currentProject - 1)
                    break;
                case 4:
                    handleClickOnItem(notecloudRef.current, currentProject - 1)
                    break;
                default:
                    break;
            }
        }
    }

    return (
        <div className={styles.CardsCarrousel_container}>

            <div className={styles.CardsCarrousel_container_dots}>
                <div onClick={() => handleClickOnItem(foodiemakersRef.current, 1)} id='foodiemakers'></div>
                <div onClick={() => handleClickOnItem(mcmanagerRef.current, 2)} id='mcmanager'></div>
                <div onClick={() => handleClickOnItem(notecloudRef.current, 3)} id='notecloud'></div>
                <div onClick={() => handleClickOnItem(moviecritRef.current, 4)} id='moviecrit'></div>
            </div>

            <div className={styles.CardsCarrousel_container_arrows}>
                <button
                    onClick={handleArrowUp}
                    className={styles.CardsCarrousel_arrows_up}
                    style={{ pointerEvents: currentProject == 1 ? "none" : "auto", opacity: currentProject == 1 ? "0.2" : "1" }}
                    disabled={currentProject == 1 ? true : false}
                >
                </button>

                <button
                    onClick={handleArrowDown}
                    className={styles.CardsCarrousel_arrows_down}
                    style={{ pointerEvents: currentProject == 4 ? "none" : "auto", opacity: currentProject == 4 ? "0.2" : "1" }}
                    disabled={currentProject == 4 ? true : false}
                >
                </button>
            </div>

            <div className={styles.CardsCarrousel_container} ref={cardsContainerRef}>

                {/* FoodieMakers */}
                <Card
                    ref={foodiemakersRef}
                    name={"foodiemakers"}
                    description='Marketplace for food manufacturers.'
                    languages={["Go", "TypeScript", "Next.js", "PostgreSQL"]}
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
                    languages={["Go", "TypeScript", "Next.js", "SQLite"]}
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