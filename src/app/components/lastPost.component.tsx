import { gql } from 'graphql-request';
import {gql_client} from '../services';
import PostCard from './postCard.component';

const query = gql`
    query {
        posts(where: {postType: post}, last:1){
        title,
        slug,
        shortText,
        content{
            html
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


const LastPost = async () => {
    const {posts}:any = await gql_client.request(query);
    const post = posts[0];

    return (
        <PostCard post={post} isFull />
    )
};

export default LastPost;