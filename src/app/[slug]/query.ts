import { gql } from 'graphql-request';

const query = gql`
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
            createdBy{
                    id,
                name
            }
            }
    }
`;

export default query;