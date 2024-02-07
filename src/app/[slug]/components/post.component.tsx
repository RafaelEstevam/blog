'use client';

import PostContent from "./content.component";
import PostDetails from "./details.component";
import PostImage from "./image.component";
import PostTitle from "./title.component";

interface PostProps {
    post: {
        title: string,
        content: any,
        gallery: any,
        createdAt: string,
        createdBy: any
    }
}

const PostComponent = ({post}:PostProps) => {

    console.log(post);
    
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