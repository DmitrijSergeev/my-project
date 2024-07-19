import { ElementType, ReactNode, forwardRef } from 'react'

import { PolymorphComponentPropsWithRef } from '@/types'

import s from './typography.module.scss'
export type CustomProps = {
  textAlign?: 'center' | 'end' | 'inherit' | 'start'
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'large'
    | 'regular14'
    | 'regular16'
    | 'regularBold14'
    | 'regularBold16'
    | 'regularLink'
    | 'regularMedium14'
    | 'small'
    | 'smallLink'
    | 'smallSemiBold'
}
type TypographyProps<T extends ElementType> = PolymorphComponentPropsWithRef<T, CustomProps>

type TypographyComponent = <T extends ElementType = 'p'>(props: TypographyProps<T>) => ReactNode

export const Typography: TypographyComponent = forwardRef(() => {
  return <div></div>
})
