import { GraphQLClient } from 'graphql-request';

import { endpoint } from '../codegen';
// import { getSdk } from './__generated__/sdk'

const graphQlClient = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`
  }
});

const previewGraphQlClient = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN}`
  }
});

export const client = graphQlClient;
export const previewClient = previewGraphQlClient;
