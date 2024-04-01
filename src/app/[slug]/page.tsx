
import { PostProps } from "./post.interface";

import PostTitle from "./components/title.component";
import PostImage from "./components/image.component";
import PostDetails from "./components/details.component";
import PostContent from "./components/content.component";
import PostShare from "./components/share.component";
import PostSnippet from "./components/snippet.component";

import { Metadata } from "next";
import { getAllPosts, getPost } from "../queries/posts";

export async function generateStaticParams() {
    const posts = await getAllPosts();
    const postsSlug = posts.map((post:PostProps) => ({slug: post.slug}));
    return postsSlug
};

export async function generateMetadata({ params }: any): Promise<Metadata> {
    const {slug} = params;
    const variables = { slug };
    const post= await getPost(variables);
    const gallery = post.gallery ? [post?.gallery[0]?.url] : undefined;

    return {
        title: post.title,
        description: post.shortText,
        openGraph: {
          images: gallery,
        },
    }
};

const Page = async ({params}:any) => {

    const {slug} = params;
    const variables = {slug}
    const post = await getPost(variables);

    const id= post.id;
    const title= post.title;
    const content = post.content;
    const image = post.gallery;
    const createdAt = post.updatedAt;
    const autor = post.createdBy.name;
    const categories = post.categories;
    const likes = post.likes;
    const relatedPosts = post.relatedPosts;

    return (
        <>
            <article className="w-full flex flex-col items-center gap-8">
                <PostImage {...{image, title}} />
                <PostTitle {...{title, categories}}/>
                <PostDetails {...{createdAt, autor}} />
                <PostSnippet {...{content, likes, id}}>
                    <PostContent {...{content, relatedPosts }} />
                </PostSnippet>
                <PostShare {...{slug}} />
            </article>
        </>
    )
};

export default Page;