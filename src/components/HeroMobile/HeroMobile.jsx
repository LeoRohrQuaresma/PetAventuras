import React from 'react'
import styles from './HeroMobile.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const HeroMobile = () => {
  return (
    <>
    <div className={styles.containerImage}>
    </div>

    <div className={styles.containerContent}>
    <h1 className={styles.title}>Bichos De Pelúcia Personalizados Do Seu Amado Animal De Estimação!</h1>
    <button className={styles.actionButton}> <FontAwesomeIcon icon={faWhatsapp} size="2x" />  FAÇA O SEU</button>

    </div>

    </>
  )
}

export default HeroMobile
