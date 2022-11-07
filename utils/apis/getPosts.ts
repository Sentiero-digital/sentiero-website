import {getHygraphClient} from "@/utils/apis/common";

export async function fetchEntries() {
  const graphcms = getHygraphClient();

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