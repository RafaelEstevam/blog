import type { Metadata, ResolvingMetadata } from 'next'

import {gql_client} from '../services';
import {queryPost, queryAllPosts} from './query';
import PostComponent, { PostProps } from "./components/post.component";
import Page404 from '../404';

export async function generateStaticParams() {
    const {posts}:any = await gql_client.request(queryAllPosts);
    const postsSlug = posts.map((post:PostProps) => ({slug: post.slug}));
    return postsSlug
}
 
export async function generateMetadata({ params }: any, parent: ResolvingMetadata): Promise<Metadata> {
    const {slug} = params;
    const variables = { slug };
    const {post}:any = await gql_client.request(queryPost, variables);
    const item:PostProps = post;
    const gallery = item.gallery ? [item?.gallery[0]?.url] : undefined;
    
    return {
        title: item.title,
        description: item.shortText,
        openGraph: {
          images: gallery,
        },
    }
}

const Page = async ({params}:any) => {

    const {slug} = params;
    const variables = { slug };
    const {post}:any = await gql_client.request(queryPost, variables);

    return post ? (
        <PostComponent {...post} />
    ) : (
        <Page404 />
    );
};

export default Page
