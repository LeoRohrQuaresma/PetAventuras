import React from 'react'
import styles from './Hero.module.css'
import HeroImage from '../../assets/cat photo.jpg'
import HeroImageStuffed from '../../assets/herostuffed.webp'
import Logo from '../../assets/PetAventurasLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const Hero = () => {
    return (
        <>
        <div className={styles.backgroundImageContainer}>
            <div className={styles.container}>
                <div className={styles.contentContainer}>
                <h1 className={styles.title}>Bichos De Pelúcia Personalizados Do Seu Amado Animal De Estimação!</h1>
                <button className={styles.actionButton}> <FontAwesomeIcon icon={faWhatsapp} size="2x" />  FAÇA O SEU</button>

                </div>
               
            </div>
            </div>
        </>
    )
}

export default Hero
