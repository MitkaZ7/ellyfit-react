import styles from './Reviews.module.scss'
import classNames from 'classnames'
import { PageTitle } from '@shared/ui/PageTitle'
import { SectionSubtitle } from '@shared/ui/SectionSubtitle'

type Props = {}

export const Reviews = (props: Props) => {
  return (
    <section className={classNames(styles.reviews)}>
      <PageTitle text='отзывы' />
      <SectionSubtitle text='Говорят'>клиенты</SectionSubtitle>
    </section>
  )
}
