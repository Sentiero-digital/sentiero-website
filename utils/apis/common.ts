import {GraphQLClient} from "graphql-request";

export const getHygraphClient = function () {
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