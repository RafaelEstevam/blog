import { gql } from 'graphql-request';
import {gql_client} from '../services';
import PostList from './postList/postList.component';


const PostGallery = async () => {

    const query = gql`
    query {
            posts(where: {postType: post}, orderBy: createdAt_DESC){
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

    const {posts}:any = await gql_client.request(query);

    return (
        <div className="w-full flex flex-wrap gap-10">
            <PostList postsList={posts} heading='H2' />
        </div>
    )
};

export default PostGallery;