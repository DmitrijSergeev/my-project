import { ReactNode } from 'react'

import s from './block.module.scss'

import { Typography } from '../typogrphy'

type BlockProps = {
  children: ReactNode
  title: string
}
export const Block = (props: BlockProps) => {
  const { children, title } = props

  return (
    <div className={s.root}>
      <div className={s.titleBlock}>
        <Typography variant={'H1'}>{title}</Typography>
        <div>{children}</div>
      </div>
    </div>
  )
}
