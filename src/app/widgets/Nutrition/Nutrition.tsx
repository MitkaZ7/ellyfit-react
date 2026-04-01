import React from 'react'
import styles from './Nutrition.module.scss'
import classNames from 'classnames'
import { PageTitle } from '@shared/ui/PageTitle'
import { SectionSubtitle } from '@shared/ui/SectionSubtitle'

type Props = {}

export const Nutrition = (props: Props) => {
  return (
    <section className={classNames(styles.nutrition)}>
      Nutrition
      <div className={classNames(styles.nutrition__left)}>
        <span className={classNames(styles['nutrition__ghost-text'])}>80</span>
        <div className={classNames(styles['nutrition__text'])}>
          <span>80%</span>
          <br />
          успеха
        </div>

        <p className={classNames(styles['nutrition__footnote'])}>
          зависит от питания
        </p>
      </div>
      <div className={classNames(styles.nutrition__right)}>
        <PageTitle text='питание' />
        <SectionSubtitle
          text='Сопровождение'
          className={classNames(styles.nutrition__subtitle)}
        >
          питания
        </SectionSubtitle>

        <ul className={classNames(styles.nutrition__specs)}>
          <li className={classNames(styles['nutrition__spec-item'])}>
            <p>Работает в связке с тренировками</p>
            <span>
              Питание и тренинг синхронизированы. Результат приходит в 3 раза
              быстрее.
            </span>
          </li>
          <li className={classNames(styles['nutrition__spec-item'])}>
            <p>Без жёстких диет</p>
            <span>
              Учу питаться вкусно и правильно. Никаких запретов — только баланс.
            </span>
          </li>
          <li className={classNames(styles['nutrition__spec-item'])}>
            <p>Долгосрочный результат</p>
            <span>Формирую привычки на всю жизнь. Не диета — образ жизни.</span>
          </li>
          <li className={classNames(styles['nutrition__spec-item'])}>
            <p>Гармония и баланс</p>
            <span>Тело, питание и психологический комфорт в равновесии.</span>
          </li>
        </ul>
      </div>
    </section>
  )
}
