import styles from './Hero.module.scss'
import classNames from 'classnames'
import picture from '../../../shared/assets/images/hero-bg.jpg'
import sliderImage from '../../../shared/assets/images/slider-1.png'
const Hero = () => {
  return (
    <div className={classNames(styles.hero)}>
      <div className={classNames(styles.hero__main)}>
        <div className={styles['hero__picture-wrapper']}>
          <img
            src={picture}
            alt='Елена, финтес-тренер'
            className={classNames(styles.hero__picture)}
          />
        </div>
        <div className={styles['hero__text-wrapper']}>
          <h1 className={classNames(styles.hero__title)}>фитнес-тренер</h1>
          <p className={classNames(styles.hero__name)}>Елена</p>
          <h2 className={classNames(styles.hero__subtitle)}>
            Приведу тебя к новой форме через дисциплину и идеальную технику
            <br />с учетом биомеханики.
          </h2>
        </div>
      </div>
      <div className={classNames(styles.hero__slider)}>
        <p className={styles['hero__slider-text']}>FITNESS</p>
        <div className={classNames(styles.hero__slider)}>
          <div className={styles['hero__slider-image-wrapper']}>
            <img
              src={sliderImage}
              alt=''
              className={styles['hero__slider-image']}
            />
          </div>
          <div className={styles['hero__slider-controls']}>
            <span className={styles['hero__slider-dot']}></span>
            <span className={styles['hero__slider-dot']}></span>
            <span className={styles['hero__slider-dot']}></span>
            <span className={styles['hero__slider-dot']}></span>
            <span className={styles['hero__slider-dot']}></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
