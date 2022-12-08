import type { ComponentProps, FC } from 'react'
import type { Thumbnail } from '~/models/common'
import classNames from 'classnames'

export type ArticleThumbnails = ComponentProps<'video' | 'img'> & {
  thumbnail: Thumbnail,
  alt: string,
  sizes?: [number, number]
};

export const ArticleMedia: FC<ArticleThumbnails> = (props) => {
  const { thumbnail, alt, className = '', sizes = '' } = props
  const [width = 350, height = 350] = sizes ?? [thumbnail.width, thumbnail.height]
  const classList = classNames('object-cover object-center', className)
  const commonAttributes = { width, height, className: classList }

  return (
    thumbnail?.mimeType?.includes('video/')
      ? (
        <video {...commonAttributes} loop muted autoPlay>
          <source src={thumbnail?.url} />
        </video>
      )
      : (
        <img src={thumbnail?.url}
             {...commonAttributes}
             alt={alt}
             loading={'lazy'}
        />
      )
  )
}