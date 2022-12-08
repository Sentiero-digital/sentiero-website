import { FC, Fragment } from 'react'
import { ArticleListItem } from '~/components/article-list-item/article-list-item'
import { Article } from '~/models/article'
import { Project } from '~/models/projects'

export type ArticleListProps = {
  heading: string,
  articles: Array<Article | Project>
}

export const ArticleList: FC<ArticleListProps> = ({ heading = '', articles = [] }) => {
  return (
    <section className='my-10'>
      <div className='container'>

        <div className='lg:row'>
          <div className='lg:col-span-3'>
            <h2 className='text-3xl font-medium lg:sticky top-10'>{heading}</h2>
          </div>

          <div className='lg:col-span-8 lg:col-start-4'>
            {articles?.map((article, index) => (
              <Fragment key={article.slug}>
                <ArticleListItem {...article} />
                <hr className='mt-3 mb-12' />
              </Fragment>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}