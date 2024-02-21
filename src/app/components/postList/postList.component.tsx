import { ReactNode } from 'react';
import { PostProps } from '../../[slug]/components/post.component';
import PostCard from '../postCard/postCard.component';

export interface PostListProps {
    postsList: PostProps[],
    isList?: boolean,
    heading: 'H1' | 'H2' | 'H3',
    showShort?: boolean,
}

const PostList = ({postsList, isList, heading, showShort}:PostListProps) => {

    const postListGrid = () => {
        if(!isList){
            return `md:grid md:grid-cols-3`
        }
    }
    
    return (
        <div className={`w-full flex flex-col gap-10 ${postListGrid()}`}>
            {postsList.map((post:PostProps, i) => {

                const idx = i % 5 === 4 && 1;
                const index = idx === 1 ? idx : i;

                return (
                    <PostCard
                        {...{post, isList, index, heading, showShort, highlight: index === 0 && !isList }}
                        key={post.title} 
                    />
                )
            })}
        </div>
    )
};

export default PostList;