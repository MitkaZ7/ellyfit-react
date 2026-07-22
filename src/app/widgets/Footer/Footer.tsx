import React from 'react'
import styles from './Footer.module.scss'
import classNames from 'classnames'

type Props = {}

export const Footer = (props: Props) => {
  return <footer className={classNames(styles.footer)}>Footer</footer>
}
