import React, { useState, useEffect } from 'react';
import styles from './Reviews.module.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Review1 from '../../assets/Review1.jpg';
import Review2 from '../../assets/Review2.jpg';
import Review3 from '../../assets/Review3.jpg';
import Review4 from '../../assets/Review4.jpg';
import Review5 from '../../assets/Review5.jpg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Reviews = () => {
  const [selectedSlide, setSelectedSlide] = useState(0);
  const [centerMode, setCenterMode] = useState(true);

  const handleSlideChange = (index) => {
    setSelectedSlide(index);
  };

  const handleResize = () => {
    const isMobile = window.innerWidth <= 450;
    const centerMode = !isMobile;
    setCenterMode(centerMode);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className={styles.container} id='review'>
        <h3 className={styles.smallTitle}>Sua Felicidade</h3>
        <h2 className={styles.bigTitle}>Nos Faz Feliz</h2>
        <Carousel
          showThumbs={false}
          showStatus={false}
          selectedItem={selectedSlide}
          onChange={handleSlideChange}
          emulateTouch={false}
          infiniteLoop={true}
          dynamicHeight={false}
          centerMode={centerMode} 
          centerSlidePercentage={30.3}
          showArrows={true}
          showIndicators={false}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button className={styles.buttonArrowLeft}
                type="button"
                onClick={onClickHandler}
                
              >
                <ArrowBackIcon
                  style={{
                    fontSize: '40px',
                    color: '#4AC5CA',
                  }}
                />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
                <button className={styles.buttonArrowRight}
                type="button"
                onClick={onClickHandler}
                
              >
                <ArrowForwardIcon
                  style={{
                    fontSize: '40px',
                    color: '#4AC5CA',
                  }}
                />
              </button>
            )
          }
        >
          <div>
            <div className={styles.carouselItem}>
              {<img src={Review1} alt="Retrato Cachorro Policial" className={styles.astronaut} />}
            </div>
          </div>

          <div>
            <div className={styles.carouselItem}>
              {<img src={Review2} alt="Retrato Cachorro Policial" className={styles.astronaut} />}
            </div>
          </div>

          <div>
            <div className={styles.carouselItem}>
              {<img src={Review3} alt="Retrato Cachorro Policial" className={styles.astronaut} />}
            </div>
          </div>

          <div>
            <div className={styles.carouselItem}>
              {<img src={Review4} alt="Retrato Cachorro Policial" className={styles.astronaut} />}
            </div>
          </div>

          <div>
            <div className={styles.carouselItem}>
              {<img src={Review5} alt="Retrato Cachorro Policial" className={styles.astronaut} />}
            </div>
          </div>
        </Carousel>
        <button className={styles.actionButton}> <FontAwesomeIcon icon={faWhatsapp} size="1x" />  Fazer retrato</button>
      </div>
    </>
  );
};

export default Reviews;
