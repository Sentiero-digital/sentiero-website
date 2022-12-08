import {GraphQLClient} from "graphql-request";

export const getCMSClient = function () {
  return new GraphQLClient(
      process.env.GRAPHCMS_URL ?? '',
      {
        headers: {
          ...(process.env.GRAPHCMS_TOKEN && {
            Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`
          })
        }
      }
  );
}

export const THUMBNAIL_QUERY = `
  thumbnail {
      mimeType
      url(transformation: {image: {resize: {width: 350, height: 350, fit: clip}}})
      width
      height
      size
    }
`;