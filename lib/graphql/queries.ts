import { graphql } from '../__generated__';

export const postByIdQuery = graphql(`
  query PostById($postId: String!) {
    post(id: $postId) {
      sys {
        id
        environmentId
        spaceId
      }
      contentfulMetadata {
        tags {
          id
          name
        }
      }
      title
      slug
      coverImage {
        url
        height
        width
        sys {
          id
          environmentId
          spaceId
        }
        contentfulMetadata {
          tags {
            id
            name
          }
        }
      }
      date
      author {
        name
        picture {
          url
          sys {
            id
            environmentId
            spaceId
          }
          contentfulMetadata {
            tags {
              id
              name
            }
          }
        }
        sys {
          id
          environmentId
          spaceId
        }
        contentfulMetadata {
          tags {
            id
            name
          }
        }
      }
      exceprt
    }
  }
`);

export const postsQuery = graphql(`
  query AllPosts {
    postCollection {
      items {
        sys {
          id
          environmentId
          spaceId
        }
        contentfulMetadata {
          tags {
            id
            name
          }
        }
        title
        slug
        coverImage {
          url
          height
          width
          sys {
            id
            environmentId
            spaceId
          }
          contentfulMetadata {
            tags {
              id
              name
            }
          }
        }
        date
        author {
          name
          picture {
            url
            sys {
              id
              environmentId
              spaceId
            }
            contentfulMetadata {
              tags {
                id
                name
              }
            }
          }
          sys {
            id
            environmentId
            spaceId
          }
          contentfulMetadata {
            tags {
              id
              name
            }
          }
        }
        exceprt
      }
    }
  }
`);
