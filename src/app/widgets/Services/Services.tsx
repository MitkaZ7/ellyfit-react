import styles from './Services.module.scss'
import classNames from 'classnames'
import { PageTitle } from '@shared/ui/PageTitle'
export const Services = () => {
  return (
    <section className={classNames(styles.services)}>
      <div className={classNames(styles.services__titles)}>
        <PageTitle
          text='программы'
          // className={classNames(styles.services__title)}
        ></PageTitle>
      </div>
      <ul className={classNames(styles.services__list)}>
        <li className={styles['services__list-item']}>
          <span className={styles['services__list-item-dot']}></span>
          <div className={styles['services__text-wrapper']}>
            <p className={styles['services__list-item-title']}>
              Персональные тренировки
            </p>
            <p className={styles['services__list-item-description']}>
              силовые, кардио, функциональные, HIIT, <br />
              стретчинг и др.
            </p>
          </div>
        </li>
        <li className={styles['services__list-item']}>
          <span className={styles['services__list-item-dot']}></span>
          <div className={styles['services__text-wrapper']}>
            <p className={styles['services__list-item-title']}></p>
            <p className={styles['services__list-item-description']}>
              каждый элемент тренировки и программы строится с учетом
              индивидуальных предпочтений
            </p>
          </div>
        </li>
        <li className={styles['services__list-item']}>
          <span className={styles['services__list-item-dot']}></span>
          <div className={styles['services__text-wrapper']}>
            <p className={styles['services__list-item-title']}>
              разработка персональных программ
            </p>
            <p className={styles['services__list-item-description']}>
              с учетом целей клиента (похудение, набор массы, поддержание формы
              и т.д.)
            </p>
          </div>
        </li>
        <li className={styles['services__list-item']}>
          <span className={styles['services__list-item-dot']}></span>
          <div className={styles['services__text-wrapper']}>
            <p className={styles['services__list-item-title']}>
              анализ текущего рациона и расчет БЖУ
            </p>
            <p className={styles['services__list-item-description']}>
              клиента и выявление ошибок, калорийности
            </p>
          </div>
        </li>
        <li className={styles['services__list-item']}>
          <span className={styles['services__list-item-dot']}></span>
          <div className={styles['services__text-wrapper']}>
            <p className={styles['services__list-item-title']}>
              составление индвидуального плана питания
            </p>
            <p className={styles['services__list-item-description']}>
              с учетом требуемых целей, биологических особенностей и пищевых
              предпочтений
            </p>
          </div>
        </li>
      </ul>
    </section>
  )
}
