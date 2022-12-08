import { useLoaderData } from '@remix-run/react'
import type { LoaderFunction } from '@remix-run/node'
import type { Articles } from '~/models/article'
import { getArticles } from '~/queries/articles'
import { strings } from '~/utils'
import { ArticleList } from '~/components'

type LoaderData = {
  articles: Articles
}

export const loader: LoaderFunction = async () => {
  const articles = await getArticles()
  return { articles }
}

export default function Blog() {
  const { articles } = useLoaderData<LoaderData>()
  return (
    <ArticleList articles={articles}
                 heading={strings.blog.title} />
  )
}