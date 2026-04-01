import styles from './Process.module.scss'
import classNames from 'classnames'
import { PageTitle } from '@shared/ui/PageTitle'
import { SectionSubtitle } from '@shared/ui/SectionSubtitle'
import photo from '@shared/assets/images/IMG_0223 — копия.jpg'

type Props = {}

export const Process = (props: Props) => {
  return (
    <section className={classNames(styles.process)}>
      <PageTitle text='как мы работаем' />
      <SectionSubtitle text='4 шага к'>результату</SectionSubtitle>
      <div className={classNames(styles.process__content)}>
        <ul className={classNames(styles['process__steps-list'])}>
          <li className={classNames(styles['process__step'])}>
            <span className={classNames(styles['process__step-number'])}>
              1
            </span>
            <p className={classNames(styles['process__steps-title'])}>
              Знакомство
            </p>
            <span className={classNames(styles['process__step-info'])}>
              30 минут — знакомимся, обсуждаем цели и подбираем подходящий
              формат
            </span>
          </li>
          <li className={classNames(styles['process__step'])}>
            <span className={classNames(styles['process__step-number'])}>
              2
            </span>
            <p className={classNames(styles['process__steps-title'])}>
              Диагностика
            </p>
            <span className={classNames(styles['process__step-info'])}>
              Замеры, анализ питания и образа жизни, оценка физической
              подготовки
            </span>
          </li>
          <li className={classNames(styles['process__step'])}>
            <span className={classNames(styles['process__step-number'])}>
              3
            </span>
            <p className={classNames(styles['process__steps-title'])}>
              Программа
            </p>
            <span className={classNames(styles['process__step-info'])}>
              Тренировки + питание, разработанные лично под вас. Готова в день
              обращения
            </span>
          </li>
          <li className={classNames(styles['process__step'])}>
            <span className={classNames(styles['process__step-number'])}>
              4
            </span>
            <p className={classNames(styles['process__step-ttitle'])}>
              Результат
            </p>
            <span className={classNames(styles['process__step-info'])}>
              Корректировка в удобные интервалы времени, постоянная поддержка и
              видимый прогресс
            </span>
          </li>
        </ul>
        <div className={classNames(styles['process__image-wrapper'])}>
          <img
            src={photo}
            alt='Тренер смотрит на фитнес трекер'
            className={classNames(styles.process__image)}
          />
        </div>
      </div>
    </section>
  )
}
