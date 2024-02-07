'use client';

import {gql_client} from '../services';
import query from './query';
import PostComponent from "./components/post.component";
import Page404 from '../404';

const Page = async ({params}:any) => {

    const {slug} = params;
    const variables = { slug };
    const {posts}:any = await gql_client.request(query, variables);

    return posts[0] ? (
        <PostComponent post={posts[0]} />
    ) : (
        <Page404 />
    );
};

export default Page
