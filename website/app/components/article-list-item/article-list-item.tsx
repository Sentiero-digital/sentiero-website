import type { FC } from 'react'
import { Link } from '@remix-run/react'
import type { Article, Project } from '~/models'
import { getLocalDate, strings } from '~/utils'
import { ArticleMedia } from '~/components'

export const ArticleListItem: FC<Article | Project> = (props) => {

  const { title, slug, thumbnail, excerpt, createdAt } = props
  const localDate = getLocalDate({ date: createdAt, options: { year: 'numeric', month: 'long', day: 'numeric' } })

  return (
    <article className='grid grid-cols-1 gap-6 md:grid-cols-4 relative'
             itemScope
             itemType='https://schema.org/NewsArticle'
    >
      <ArticleMedia
        alt={`Cover for ${title}`}
        className='object-cover w-full h-40 col-span-1 bg-center'
        thumbnail={thumbnail}
        {...!thumbnail.mimeType.includes('video') && { itemProp: 'image' }}
      />
      <div className='col-span-1 md:col-span-3'>
        <time className='mb-2 -mt-1 text-sm font-normal text-gray-500'
              dateTime={createdAt}
              {...{ itemProp: 'datePublished', content: createdAt }}
        >{localDate}</time>
        <h3 className='mb-2 text-xl font-extrabold leading-snug text-gray-800'
            itemProp={'headline'}>{title}</h3>
        <p className='mb-3 text-sm font-normal text-gray-500'>{excerpt}</p>
        <Link className={`before:opacity-0 before:absolute before:inset-0 z-1`}
              itemProp={'url'}
              title={`${strings.blog.item.read} ${title}`}
              to={`/articles/${slug}`}>{strings.blog.item.cta}</Link>
      </div>
    </article>
  )
}