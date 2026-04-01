import classNames from 'classnames/dedupe'
import styles from './PageTitle.module.scss'
import type { PageTitleProps } from './PageTitle.types'

export const PageTitle = ({ text, className }: PageTitleProps) => {
  return (
    <h2 className={classNames(styles['page-title'], className)}>⎯ {text}</h2>
  )
}
