import { getCMSClient, THUMBNAIL_QUERY } from './_common'
import type { Projects } from '~/models/projects'

export async function getProjects() {
  const client = getCMSClient()

  const { projects = [] } = await client.request<{ projects: Projects }>(
    `
      { 
        projects {
          content {
            html
          }
          excerpt
          id
          slug
          ${THUMBNAIL_QUERY}
          title
          urls
          createdAt
          updatedAt
        }
      }
    `,
  )

  return projects
}