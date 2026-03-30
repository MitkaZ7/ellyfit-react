import styles from './Button.module.scss'
import classNames from 'classnames'
import type { ButtonProps } from './Button.types'

export const Button = ({
  label,
  disabled = false,
  size = 'medium',
  variant = 'primary',
  className,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        styles['button'],
        styles[`button--${size}`],
        styles[`button--${variant}`],
        className // внешний класс перекроет базовые стили если нужно
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  )
}
