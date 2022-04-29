import {GraphQLClient} from "graphql-request";

export async function fetchEntries() {
  const graphcms = new GraphQLClient(
      process.env.GRAPHCMS_URL ?? '',
      {
        headers: {
          ...(process.env.GRAPHCMS_TOKEN && {
            Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`
          })
        }
      }
  );

  const {projects = []} = await graphcms.request(
      `
      { 
        projects {
          content {
            html
          }
          id
          slug
          thumbnail {
            mimeType
            size
            url
            width
            height
          }
          title
          urls
        }
      }
    `
  );

  return projects;
}