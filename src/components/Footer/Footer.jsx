import React from 'react'
import styles from './Footer.module.css'
import Logo from '../../assets/PetAventurasLogo.png'


const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <img src={Logo} alt="Pet Aventuras" className={styles.logo} />
          <p className={styles.rights}>Todos direitos reservados <span className={styles.bold}>© 2023</span></p>
        </div>
        <div className={styles.rightSide}>
          <p className={styles.contact}>Contatos:</p>
          <p className={styles.instagram}>Instagram: <span className={styles.bold} >@PetAventuras </span> </p>
          <p>Whatsapp:<span className={styles.bold} >+511314141 </span> </p>
        </div>
      </div>
    </>
  )
}

export default Footer
