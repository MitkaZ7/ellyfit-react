import logo from '../../../shared/assets/images/logo.svg'
import Navbar from '../Navbar/Navbar'
import { Button } from '../../../shared/ui/Button/Button'
import styles from './Header.module.scss'
import classNames from 'classnames'
const Header = () => {
  return (
    <header className={classNames(styles.header)}>
      <a href='#' className={classNames(styles.header__logo)}>
        Eлена
      </a>
      <Navbar />
      <Button label='Записаться' size='medium' variant='primary'></Button>
    </header>
  )
}

export default Header
