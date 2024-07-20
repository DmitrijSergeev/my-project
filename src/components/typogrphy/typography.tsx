import { ComponentPropsWithoutRef, ElementRef, ElementType, ReactNode, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './typography.module.scss'

export type VariantType =
  | 'Body1'
  | 'Body2'
  | 'Caption'
  | 'H1'
  | 'H2'
  | 'H3'
  | 'Large'
  | 'Link1'
  | 'Link2'
  | 'Overline'
  | 'Subtitle1'
  | 'Subtitle2'

export type TypographyProps<T extends ElementType = 'p'> = {
  asComponent?: T
  children: ReactNode
  className?: string
  colorText?: 'colorDefault' | 'light100'
  variant?: VariantType
} & ComponentPropsWithoutRef<'p'>

export const Typography = forwardRef(
  <T extends ElementType = 'p'>(props: TypographyProps<T>, ref: ElementRef<T>) => {
    const {
      asComponent,
      children,
      className,
      colorText = 'colorDefault',
      variant = 'Body2',
      ...rest
    } = props

    const typographyClassName = clsx(s[variant], s[colorText], className && className)
    const Component: ElementType = asComponent || 'p'

    return (
      <Component className={typographyClassName} {...rest} ref={ref}>
        {children}
      </Component>
    )
  }
)
