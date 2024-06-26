import { ReactNode } from 'react';
import { PostProps } from '../../[slug]/post.interface';
import PostCard from '../postCard/postCard.component';
import PostCardV2 from '../postCard/postCardV2.component';

export interface PostListProps {
    postsList: PostProps[],
    isList?: boolean,
    heading: 'H1' | 'H2' | 'H3',
    showShort?: boolean,
}

const PostList = ({postsList, isList, heading, showShort}:PostListProps) => {
    
    return (
        <div className={`w-full flex flex-col gap-8`}>
            {postsList.map((post:PostProps, i) => {
                return (
                    <PostCardV2
                        {...{post, isList, heading, showShort }}
                        key={post.title} 
                    />
                )
            })}
        </div>
    )
};

export default PostList;