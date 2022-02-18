import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
    const query = gql`
    query MyQuery {
        postsConnection {
          edges {
            node {
              author {
                bio
                name
                id
                photo {
                  url
                }
              }
              readingTime
              createdAt
              slug
              title
              excerpt
              featuredImage {
                url
              }
            }
          }
        }
      }
      
      
    `
    const result = await request(graphqlAPI, query);

    return result.postsConnection.edges;
}; 

export const getPostDetails = async (slug) => {
    const query = gql`
      query GetPostDetails($slug : String!) {
        post(where: {slug: $slug}) {
          title
          excerpt
          featuredImage {
            url
          }
          author{
            name
            bio
            photo {
              url
            }
          }
          readingTime
          createdAt
          slug
          content {
            raw
          }
          
        }
      }
    `;
  
    const result = await request(graphqlAPI, query, { slug });
  
    return result.post;
  };

  export const getFeaturedPosts = async () => {
    const query = gql`
      query GetCategoryPost() {
        posts(where: {featuredPost: true}) {
          author {
            name
            photo {
              url
            }
          }
          featuredImage {
            url
          }
          title
          slug
          createdAt
        }
      }   
    `;

    const result = await request(graphqlAPI, query);

  return result.posts;
};