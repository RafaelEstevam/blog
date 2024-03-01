import { getPost } from '@/app/queries/posts';

import PostContent from "./content.component";
import PostDetails from "./details.component";
import PostImage from "./image.component";
import PostShare from "./share.component";
import PostTitle from "./title.component";

export interface PostProps {
    title: string,
    content: any,
    gallery: any[],
    slug: string,
    categories?: string[],
    shortText?: string,
    createdBy: {
        name: string,
    },
    createdAt: string,
    updatedAt: string,
}

interface PostComponentProps{
    slug: string
}

const PostComponent = async ({slug}:PostComponentProps) => {

    const variables = { slug };
    const post:PostProps = await getPost(variables);
    
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

export default PostComponent;