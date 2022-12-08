import { getCMSClient, THUMBNAIL_QUERY } from './_common'
import type { Articles } from '~/models/article'

export async function getArticles() {
  const client = getCMSClient()

  const { contents = [] } = await client.request<{ contents: Articles }>(
    `
     query Content {
      contents(stage: PUBLISHED) {
        createdAt
        updatedAt
        title
        slug
        id
        content
        excerpt
        ${THUMBNAIL_QUERY}
      }
     }
    `,
  )

  return contents
}