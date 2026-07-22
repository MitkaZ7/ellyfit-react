import classNames from 'classnames'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  fullWidth?: boolean
  className?: string
}
export const Layout = ({ children, fullWidth = false, className }: Props) => {
  return <div className={classNames('container')}>{children}</div>
}
