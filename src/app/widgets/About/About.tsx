import styles from './About.module.scss'
import classNames from 'classnames'
import aboutImage from '@shared/assets/images//IMG_0325.jpg'
import { PageTitle } from '@shared/ui/PageTitle'
export const About = () => {
  return (
    <section className={classNames(styles.about)}>
      <div className={styles['about__text-wrapper']}>
        <div className={classNames(styles.about__titles)}>
          <PageTitle text='⎯ обо мне'></PageTitle>
          <p className={classNames(styles.about__title)}>
            Ваш тренер - <em style={{ color: 'red' }}>Елена</em>
          </p>
        </div>
        <div className={styles['about__text-wrapper-inner']}>
          <p className={styles['about__text-paragraph']}>
            Помогу вам обрести тело мечты, стать по-настоящему лучшей версией
            себя и полюбить свое отражение в зеркале — без изнуряющих
            ограничений.
          </p>
          <p className={styles['about__text-paragraph']}>
            Моя методика основана на научном подходе, индивидуальном плане и
            гармонии между тренировками, питанием и ментальным комфортом. Cпорт
            станет естественной частью вашей жизни — без насилия над собой, но с
            впечатляющими результатами!
          </p>
          <p className={styles['about__text-paragraph']}>
            Исключительно индивидуальный подход.
          </p>
        </div>
        <ul className={styles['about__services-list']}>
          <li className={styles['about__services-item']}>
            <a className={styles['about__services-link']}>Планы питания</a>
          </li>
          <li className={styles['about__services-item']}>
            <a className={styles['about__services-link']}>
              Персональные тренировки
            </a>
          </li>
          <li className={styles['about__services-item']}>
            <a className={styles['about__services-link']}>Рассчет КБЖУ</a>
          </li>
          <li className={styles['about__services-item']}>
            <a className={styles['about__services-link']}>Нутрициология</a>
          </li>
        </ul>
      </div>
      <img
        src={aboutImage}
        alt=''
        className={classNames(styles.about__image)}
      />
    </section>
  )
}
