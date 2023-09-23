import React from 'react'
import styles from './Header.module.css'
import Logo from '../../assets/PetAventurasLogo.png'

const Header = () => {
    return (
        <>
            <div className={styles.container}>
                <img src={Logo} alt="Pet Aventuras" className={styles.logo} />
                <div className={styles.rightOptions}>
                    <a href="#review"> Avaliações </a>
                   <a href="#HowItWorks"> Como Funciona </a>
                </div>
            </div>
        </>
    )
}

export default Header
