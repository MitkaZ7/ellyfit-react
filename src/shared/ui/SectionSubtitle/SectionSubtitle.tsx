import classNames from 'classnames/dedupe'
import styles from './SectionSubtitle.module.scss'
import type { SectionSubtitleProps } from './SectionSubtitle.types'

export const SectionSubtitle = ({
  text,
  className,
  children,
}: SectionSubtitleProps) => {
  return (
    <p className={classNames(styles['section-subtitle'], className)}>
      {text}
      <br />
      <em>{children}</em>
    </p>
  )
}
