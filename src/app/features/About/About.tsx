import styles from './About.module.scss'
import classNames from 'classnames'
import aboutImage from '../../../shared/assets/images/About-image.jpg'

const About = () => {
  return (
    <section className={classNames(styles.about)}>
      <div className={classNames(styles.about__titles)}>
        <h2 className={classNames(styles.about__title)}>ВАШ ТРЕНЕР ЕЛЕНА</h2>
        <p className={classNames(styles.about__subtitle)}>знакомство</p>
      </div>
      <div className={classNames(styles.about__main)}>
        <img src={aboutImage} alt='' />
        <div className={styles['about__text-wrapper']}>
          <ul className={styles['about__advantages-list']}>
            <li className={styles['about__advantages-item']}>
              Более 14 лет в фитнесе
            </li>
            <li className={styles['about__advantages-item']}>
              Дипломированный фитнес-тренер
            </li>
            <li className={styles['about__advantages-item']}>
              Авторская методика
            </li>
          </ul>
          <div className={styles['about__text-wrapper-inner']}>
            <p className={styles['about__text-paragraph']}>
              Помогу вам обрести тело мечты, стать по-настоящему лучшей версией
              себя и полюбить свое отражение в зеркале — без изнуряющих
              ограничений.
            </p>
            <p className={styles['about__text-paragraph']}>
              Моя методика основана на научном подходе, индивидуальном плане и
              гармонии между тренировками, питанием и ментальным комфортом.
              Cпорт станет естественной частью вашей жизни — без насилия над
              собой, но с впечатляющими результатами!
            </p>
          </div>
        </div>
      </div>
      <div className={styles['about__slider-controls']}>
        <span className={styles['about__slider-dot']}></span>
        <span className={styles['about__slider-dot']}></span>
        <span className={styles['about__slider-dot']}></span>
        <span className={styles['about__slider-dot']}></span>
        <span className={styles['about__slider-dot']}></span>
      </div>
    </section>
  )
}

export default About
