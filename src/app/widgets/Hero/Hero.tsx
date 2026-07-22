import styles from './Hero.module.scss'
import classNames from 'classnames'
import picture from '../../../shared/assets/images/hero-bg.jpg'
import { Button } from '@shared/ui/Button'
import { PageTitle } from '@shared/ui/PageTitle'

const STATS = [
  { value: '14+', label: 'лет опыта' },
  { value: '>20', label: 'клиентов' },
  { value: '®', label: 'Дипломированный тренер' },
] as const

const Hero = () => {
  return (
    <div className={classNames(styles.hero)}>
      <div className={classNames(styles.hero__main)}>
        <div className={styles['hero__text-wrapper']}>
          <PageTitle text='пернсональный тренер ⎯ анапа'></PageTitle>
          <h1 className={classNames(styles.hero__title)}>
            Твой путь к <em>идеальному</em> телу
          </h1>

          <h2 className={classNames(styles.hero__subtitle)}>
            Приведу тебя к новой форме через дисциплину и идеальную технику с
            учетом биомеханики.
          </h2>
          <div className={classNames(styles.hero__actionButtons)}>
            <Button label='начать сейчас' size='large' />
            <a className={classNames(styles.hero__link)} href='#'>
              Узнать больше
            </a>
          </div>
        </div>
        <figure className={styles['hero__picture-wrapper']}>
          <img
            src={picture}
            alt='Елена, финтес-тренер,упражнение `планка`'
            className={classNames(styles.hero__picture)}
          />
          <ul className={classNames(styles.hero__stats)}>
            {STATS.map(({ value, label }) => (
              <li key={label} className={styles.hero__stat}>
                <span className={styles['hero__stat-value']}>{value}</span>
                <span className={styles['hero__stat-label']}>{label}</span>
              </li>
            ))}
          </ul>
          <div className={styles.hero__scroll} aria-hidden='true'>
            <span className={styles['hero__scroll-text']}>scroll</span>
            <span className={styles['hero__scroll-line']} />
          </div>
        </figure>
      </div>
    </div>
  )
}

export default Hero
