import styles from './Services.module.scss'
import classNames from 'classnames'
const Services = () => {
  return (
    <section className={classNames(styles.services)}>
      <div className={classNames(styles.services__titles)}>
        <p className={classNames(styles.services__subtitle)}>
          Персональный подход
        </p>
        <h2 className={classNames(styles.services__title)}>
          Как я могу
          <br />
          помочь?
        </h2>
      </div>
      <ul className={classNames(styles.services__list)}>
        <li className={styles['services__list-item']}>
          <span className={styles['services__list-item-dot']}></span>
          <div className={styles['services__text-wrapper']}>
            <p className={styles['services__list-item-title']}>
              персональные тренировки
            </p>
            <p className={styles['services__list-item-description']}>
              силовые, кардио, функциональные, HIIT, стретчинг и др.
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

export default Services
