import { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { Button } from '../../../shared/ui/Button/Button'
import styles from './Header.module.scss'
import classNames from 'classnames'
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={classNames(styles.header, { [styles.scrolled]: isScrolled })}
    >
      <a href='#' className={classNames(styles.header__logo)}>
        Eлена
      </a>
      <Navbar />
      <Button label='Записаться' size='medium' variant='primary'></Button>
    </header>
  )
}

export default Header
