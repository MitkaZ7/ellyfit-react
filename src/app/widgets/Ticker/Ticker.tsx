import styles from './Ticker.module.scss'
import Marquee from 'react-fast-marquee'

const ITEMS = [
  { text: 'Персональные тренировки', accent: false },
  { text: 'Метод «Сила изнутри»', accent: true },
  { text: 'Сопровождение питания', accent: false },
  { text: 'Онлайн-коучинг', accent: true },
  { text: 'Трансформация тела', accent: false },
  { text: 'Без магии', accent: true },
]

export const Ticker = () => {
  return (
    <div className={styles.ticker} aria-hidden='true'>
      <Marquee speed={40} pauseOnHover>
        {ITEMS.map(({ text, accent }) => (
          <span key={text} className={styles.ticker__item}>
            <span
              className={
                accent ? styles['ticker__text--accent'] : styles.ticker__text
              }
            >
              {text}
            </span>
            <span className={styles.ticker__dot}>•</span>
          </span>
        ))}
      </Marquee>
    </div>
  )
}
