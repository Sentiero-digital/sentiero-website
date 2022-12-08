import { FC, PropsWithChildren } from 'react'
import classNames from 'classnames'

export type TextProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div',
  className?: string,
  variant: 'hero' | 'title' | 'smallTitle' | 'subtitle' | 'body' | 'caption',
}

const classMap: Record<TextProps['variant'], string> = {
  hero: 'text-5xl font-bold',
  title: 'text-3xl font-bold',
  smallTitle: 'text-xl font-bold leading-tight',
  subtitle: 'text-xl font-bold',
  body: 'text-base',
  caption: 'text-sm',
}

export const Text: FC<PropsWithChildren<TextProps>> = (props) => {
  const { children, variant = 'body', className = '', as = 'div' } = props
  const Element = as

  return (
    <Element className={classNames(classMap[variant], className)}>
      {children}
    </Element>
  )
}