import { gql } from 'graphql-request';

const queryAllPosts = gql`
    query Posts{
        posts{
            id,
            slug,
            title,
            shortText
        }
    }
`;

const queryPost = gql`
    query Posts($slug:String!) {
        post(where:{slug:$slug}){
            title,
            slug,
            content{
                html
            },
            gallery {
                id,
                url,
            },
            categories,
            createdAt,
            updatedAt,
            shortText,
            createdBy{
                id,
                name
            }
        }
    }
`;

export {
    queryPost,
    queryAllPosts
};