import { PostProps } from "../../[slug]/components/post.component";
import { queryAllPosts, queryPost } from "../../[slug]/query";
import { gql_client } from "../../services";

import PostTitle from "../../[slug]/components/title.component";
import PostImage from "../../[slug]/components/image.component";
import PostDetails from "../../[slug]/components/details.component";
import PostContent from "../../[slug]/components/content.component";
import PostShare from "../../[slug]/components/share.component";
import { Metadata, ResolvingMetadata } from "next";

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
    const createdAt = post.createdAt;
    const autor = post.createdBy.name;
    const categories = post.categories;

    return (
        <>
            <PostImage {...{image, title}} />
            <PostTitle {...{title, categories}}/>
            <PostDetails {...{createdAt, autor}} />
            <PostContent {...{content}}/>
            <PostShare {...{slug}} />
        </>
    )
};

export default Page;