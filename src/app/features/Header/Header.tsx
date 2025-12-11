import logo from '../../../shared/assets/images/logo.svg'
import Navbar from '../../widgets/Navbar/Navbar'
import styles from './Header.module.scss'
import classNames from 'classnames'
const Header = () => {
  return (
    <header className={classNames(styles.header)}>
      <img src={logo} alt='' className={classNames(styles.header__logo)} />
      <Navbar />
    </header>
  )
}

export default Header
