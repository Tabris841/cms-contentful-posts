import { CodegenConfig } from '@graphql-codegen/cli';

const endpointOverride = process.env.CONTENTFUL_GRAPHQL_ENDPOINT;
const productionEndpoint = 'https://graphql.contentful.com/content/v1/spaces';
export const endpoint = `${endpointOverride || productionEndpoint}/${
  process.env.CONTENTFUL_SPACE_ID
}`;
export const config: CodegenConfig = {
  overwrite: true,
  ignoreNoDocuments: true,
  schema: [
    {
      [endpoint || '']: {
        headers: {
          Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`
        }
      }
    }
  ],
  documents: 'lib/graphql/queries.ts',
  // documents: 'lib/graphql/**/*.graphql',
  generates: {
    'lib/__generated__/': {
      preset: 'client',
      plugins: [],
      config: {
        skipTypename: true
      },
      presetConfig: {
        fragmentMasking: false
      }
    }
    // 'lib/__generated__/graphql.schema.json': {
    //   plugins: ['introspection']
    // },
    // 'lib/__generated__/graphql.schema.graphql': {
    //   plugins: ['schema-ast']
    // },
    // 'lib/__generated__/sdk.ts': {
    //   documents: ['src/lib/graphql/**/*.graphql'],
    //   plugins: [
    //     'typescript',
    //     'typescript-operations',
    //     'typescript-graphql-request'
    //   ],
    //   config: {
    //     rawRequest: false,
    //     inlineFragmentTypes: 'combine',
    //     skipTypename: false,
    //     exportFragmentSpreadSubTypes: true,
    //     dedupeFragments: true,
    //     preResolveTypes: true
    //   }
    // }
  }
};

export default config;
