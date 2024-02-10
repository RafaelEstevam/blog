import { PostProps } from "../../[slug]/components/post.component";
import { queryAllPosts, queryPost } from "../../[slug]/query";
import { gql_client } from "../../services";

import PostTitle from "../../[slug]/components/title.component";
import PostImage from "../../[slug]/components/image.component";
import PostDetails from "../../[slug]/components/details.component";
import PostContent from "../../[slug]/components/content.component";
import PostShare from "../../[slug]/components/share.component";

export async function generateStaticParams() {
    const {posts}:any = await gql_client.request(queryAllPosts);
    const postsSlug = posts.map((post:PostProps) => ({slug: post.slug}));
    return postsSlug
}

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
            <PostShare {...post} />
        </>
    )
};

export default Page;