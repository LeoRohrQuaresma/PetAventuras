import React from 'react'
import styles from './PortraitFavorites.module.css'
import Astronaut from '../../assets/astronaut.jpg'
import Monarca from '../../assets/Monarca.jpg'
import PoliceDog from '../../assets/PoliceDog.avif'
import nobleCats from '../../assets/nobleCats.jpg'
import FlowerCat from '../../assets/FlowerCat.jpg'
import ChadDog from '../../assets/ChadDog.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';



const PortraitFavorites = () => {
    return (
        <>
            <div className={styles.container}>
                <h2 className={styles.title}> Fantasias Favoritas Dos Nossos Clientes </h2>
                <div className={styles.portraitsImagesRow1}>
                    <div className={styles.imageWrapper}>
                        <img src={Astronaut} alt="Retrato Cachorro Astronauta" className={styles.astronaut} />
                    </div>
                    <div className={styles.imageWrapper}>
                        <img src={nobleCats} alt="Retrato Cachorro Monarca" className={styles.astronaut} />
                    </div>
                    <div className={styles.imageWrapper}>
                        <img src={PoliceDog} alt="Retrato Cachorro Policial" className={styles.astronaut} />
                    </div>
                </div>

                <div className={styles.portraitsImagesRow1}>
                    <div className={styles.imageWrapper}>
                        <img src={Monarca} alt="Retrato Cachorro Astronauta" className={styles.astronaut} />
                    </div>
                    <div className={styles.imageWrapper}>
                        <img src={FlowerCat} alt="Retrato Cachorro Monarca" className={styles.astronaut} />
                    </div>
                    <div className={styles.imageWrapper}>
                        <img src={ChadDog} alt="Retrato Cachorro Policial" className={styles.astronaut} />
                    </div>
                </div>
                <button className={styles.actionButton}>
                    <FontAwesomeIcon icon={faWhatsapp} size="1x" /> Fazer retrato
                </button>
            </div>
        </>
    )
}

export default PortraitFavorites
