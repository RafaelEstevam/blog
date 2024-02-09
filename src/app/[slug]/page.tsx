import type { Metadata, ResolvingMetadata } from 'next'

import {gql_client} from '../services';
import query from './query';
import PostComponent, { PostProps } from "./components/post.component";
import Page404 from '../404';
 
export async function generateMetadata({ params }: any, parent: ResolvingMetadata): Promise<Metadata> {
    const {slug} = params;
    const variables = { slug };
    const post:PostProps = await gql_client.request(query, variables);
    const gallery = post.gallery ? [post?.gallery[0]?.url] : undefined;
    
    return {
        title: post.title,
        description: post.shortText,
        openGraph: {
          images: gallery,
        },
    }
}

const Page = async ({params}:any) => {

    const {slug} = params;
    const variables = { slug };
    const {post}:any = await gql_client.request(query, variables);

    return post ? (
        <PostComponent {...post} />
    ) : (
        <Page404 />
    );
};

export default Page
