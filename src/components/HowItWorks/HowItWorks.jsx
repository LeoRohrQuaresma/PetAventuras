import React from 'react'
import styles from './HowItWorks.module.css'
import Step1 from '../../assets/undraw_messages_re_qy9x.svg'
import Step2 from '../../assets/undraw_options_re_9vxh.svg'
import Step3 from '../../assets/undraw_payments_re_77x0.svg'
import Step4 from '../../assets/undraw_confirmed_re_sef7.svg'
import Step5 from '../../assets/undraw_delivery_truck_vt6p.svg'


const HowItWorks = () => {
    console.log('teste')
    return (
        <>
            <div className={styles.container} id='HowItWorks' >
                <h2 className={styles.title}>Como funciona</h2>
                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <div className={styles.cardImage}>
                            <img src={Step1} alt="Entrar Em Contato" className={styles.image1} />
                        </div>
                        <div className={styles.cardContent}>
                            <h2 className={styles.cardTitle}>Entre Em Contato</h2>
                            <p className={styles.cardText}>
                            Para entrar em contato, é simples: chame no WhatsApp. Fale conosco a qualquer momento!
                            </p>
                        </div>


                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardImage}>
                            <img src={Step2} alt="Escolha do Estilo e Tamanho" className={styles.image2} />
                        </div>
                        <div className={styles.cardContent}>
                            <h2 className={styles.cardTitle}>Escolha do Estilo e Tamanho</h2>
                            <p className={styles.cardText}>
                                Você terá a oportunidade de escolher o tamanho que deseja.
                            </p>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardImage}>
                            <img src={Step3} alt="Pagamento" className={styles.image3} />
                        </div>
                        <div className={styles.cardContent}>
                            <h2 className={styles.cardTitle}>Pagamento</h2>
                            <p className={styles.cardText}>
                            O processo de pagamento é rápido e seguro. Aceitamos diversas formas de pagamento para sua comodidade. Você pode efetuar o pagamento de maneira conveniente e tranquila.                            </p>
                        </div>
                    </div>


                </div>

                <div className={styles.cardContainer}>
                
                <div className={styles.card}>
                    <div className={styles.cardImage}>
                        <img src={Step5} alt="Entrega" className={styles.image5} />
                    </div>
                    <div className={styles.cardContent}>
                        <h2 className={styles.cardTitle}>Entrega</h2>
                        <p className={styles.cardText}>
                        Sua felicidade está a caminho!  nós preparamos o seu bicho de pelúcia personalizado com todo carinho e o enviamos para o endereço que você forneceu. Agora é só esperar ansiosamente pela chegada.</p>
                    </div>
                </div>
                </div>

            </div>
        </>
    )
}

export default HowItWorks
