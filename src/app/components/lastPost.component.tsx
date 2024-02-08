import { gql } from 'graphql-request';
import {gql_client} from '../services';
import PostCard from './postCard.component';

const query = gql`
    query {
        posts(last:1){
        title,
        slug,
        shortText,
        categories,
        createdAt,
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