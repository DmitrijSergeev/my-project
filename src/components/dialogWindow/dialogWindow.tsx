import { ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import s from './dialogWindow.module.scss'

export type DialogRadixProps = {
  children: ReactNode
  title?: string
}

export const DialogWindow = (props: DialogRadixProps) => {
  const { title } = props

  return (
    <Dialog.Root>
      <Dialog.Portal>
        <Dialog.Title>
          <span>{title}</span>
        </Dialog.Title>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
