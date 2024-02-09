import {gql_client} from '../../services';
import {queryPost} from '../query';

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

async function getData(variables:any) {
    const {post}:any = await gql_client.request(queryPost, variables);
    const item:PostProps = post
    return item;
}

const PostComponent = async ({slug}:PostComponentProps) => {

    const variables = { slug };
    const post:any = await getData(variables);
    
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