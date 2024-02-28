import Script from 'next/script'

import { PostProps } from "./components/post.component";
import { queryAllPosts, queryPost } from "./query";
import { gql_client } from "../services";

import PostTitle from "./components/title.component";
import PostImage from "./components/image.component";
import PostDetails from "./components/details.component";
import PostContent from "./components/content.component";
import PostShare from "./components/share.component";
import PostSnippet from "./components/snippet.component";

import { Metadata, ResolvingMetadata } from "next";
import { Chilanka } from "next/font/google";

export async function generateStaticParams() {
    const {posts}:any = await gql_client.request(queryAllPosts);
    const postsSlug = posts.map((post:PostProps) => ({slug: post.slug}));
    return postsSlug
};

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
};

const Page = async ({params}:any) => {

    const {slug} = params;
    const variables = {slug}
    const {post}:any = await gql_client.request(queryPost, variables);

    const title= post.title;
    const content = post.content;
    const image = post.gallery;
    const createdAt = post.updatedAt;
    const autor = post.createdBy.name;
    const categories = post.categories;

    return (
        <>
            <PostImage {...{image, title}} />
            <PostTitle {...{title, categories}}/>
            <PostDetails {...{createdAt, autor}} />
            <PostSnippet>
                <PostContent {...{content}}/>
            </PostSnippet>
            <PostShare {...{slug}} />
        </>
    )
};

export default Page;