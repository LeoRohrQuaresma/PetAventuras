import React from 'react'
import styles from './Hero.module.css'
import HeroImage from '../../assets/cat photo.jpg'
import Logo from '../../assets/PetAventurasLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const Hero = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.leftSide}>
                    <img src={Logo} alt="Pet Aventuras" className={styles.logo} />
                    <h1 className={styles.title}>Retratos De Pets Totalmente Personalizados</h1>
                    <img src={HeroImage} alt="Retrato de um Gato" className={styles.HeroImageMobile} />

                    <p className={styles.subtitle}>Deixe-se sorrir e alegrar toda vez que contemplar a adorável imagem do seu bebê de quatro patas.</p>

                    <p className={styles.price}>R$50.00 <span className={styles.priceOff}>-20%</span></p>
                    <button className={styles.actionButton}> <FontAwesomeIcon icon={faWhatsapp} size="1x" />  Fazer retrato</button>
                </div>
                <div className={styles.rightSide}>
                    <img src={HeroImage} alt="Retrato de um Gato" className={styles.HeroImage} />
                </div>
            </div>
        </>
    )
}

export default Hero
