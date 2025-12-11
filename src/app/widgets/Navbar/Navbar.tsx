import { useState } from 'react'
import classNames from 'classnames'
import styles from './Navbar.module.scss'

const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  return (
    <nav
      className={classNames(styles.navbar, {
        [styles.navbar__mobile]: menuIsOpen,
      })}
    >
      <div className={classNames(styles.navbar__inner)}>
        <ul
          className={classNames(styles.navbar__menu, {
            [styles.menuOpen]: menuIsOpen,
          })}
        >
          <li className='navbar__menu-item'>
            <a
              href='#about-section'
              className={classNames(styles.navbar__menu_link)}
              onClick={toggleMenu}
            >
              Обо мне
            </a>
          </li>
          <li className='navbar__menu-item'>
            <a
              href='#services-section'
              className={classNames(styles.navbar__menu_link)}
              onClick={toggleMenu}
            >
              Услуги
            </a>
          </li>
          <li className='navbar__menu-item'>
            <a
              href='#reviews-section'
              className={classNames(styles.navbar__menu_link)}
              onClick={toggleMenu}
            >
              Отзывы
            </a>
          </li>
          <li className='navbar__menu-item'>
            <a
              href='#footer'
              className={classNames(styles.navbar__menu_link)}
              onClick={toggleMenu}
            >
              Контакты
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
