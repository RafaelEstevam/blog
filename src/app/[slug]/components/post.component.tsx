import PostContent from "./content.component";
import PostDetails from "./details.component";
import PostImage from "./image.component";
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

const PostComponent = (post:PostProps) => {
    
    const title= post.title;
    const content = post.content;
    const image = post.gallery;
    const createdAt = post.createdAt;
    const autor = post.createdBy.name

    return (
        <>
            <PostImage {...{image}} />
            <PostTitle {...{title}}/>
            <PostDetails {...{createdAt, autor}} />
            <PostContent {...{content}}/>
        </>
    )
};

export default PostComponent;