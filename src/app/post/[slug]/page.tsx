import { PostProps } from "../../[slug]/components/post.component";
import { queryAllPosts, queryPost } from "../../[slug]/query";
import { gql_client } from "../../services";

export async function generateStaticParams() {
    const {posts}:any = await gql_client.request(queryAllPosts);
    const postsSlug = posts.map((post:PostProps) => ({slug: post.slug}));
    return postsSlug
}

const Page = async ({params}:any) => {

    const {slug} = params;
    const variables = {slug}
    const {post}:any = await gql_client.request(queryPost, variables);

    return (
        <>{post?.title}</>
    )
};

export default Page;