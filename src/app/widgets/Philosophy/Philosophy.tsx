import React from 'react'
import styles from './Philosophy.module.scss'
import classNames from 'classnames'
import { PageTitle } from '@shared/ui/PageTitle'
type Props = {}

export const Philosophy = (props: Props) => {
  return (
    <section className={classNames(styles.philosophy)}>
      <div className={classNames(styles['philosophy__top-part'])}>
        <blockquote>
          В этом деле нет никаких секретов, все давно уже определено наукой.
          Правильное питание и физические нагрузки решают всё
        </blockquote>
      </div>
      <PageTitle text='подход' />
      <div className='philosophy__shadow-word'>METHOD</div>
    </section>
  )
}
