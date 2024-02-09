import { gql } from 'graphql-request';
import {gql_client} from '../services';
import LoadMorePosts from './loadMorePosts.component';
import PostList from './postList.component';


const PostGallery = async ({skip = 1, first = 2}:any) => {

    const query = gql`
    query {
            posts(where: {postType: post}, skip: ${skip}, first: ${first}, orderBy: createdAt_DESC){
                title,
                slug,
                shortText,
                categories,
            }
        }
    `;

    const {posts}:any = await gql_client.request(query);

    return (
        <div className="w-full flex flex-wrap">
            <PostList postsList={posts} />
            <LoadMorePosts />
        </div>
    )
};

export default PostGallery;