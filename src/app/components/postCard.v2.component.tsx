import Link from 'next/link';
import PostCategory from './postCategory.component';
import { PostProps } from '../[slug]/components/post.component';

interface PostCardProps {
    post: PostProps,
    title?: 'H2' | 'H3',
    size?: 'md' | 'lg',
    showShort?: boolean,
    isList?: boolean,
    isFull?: boolean,
}

const PostTitle = ({ title, post, isList }: PostCardProps) => {
    const origin = '';
    return (
        <Link href={`${origin}/${post.slug}`}>
            {title === 'H2' && !isList ? (
                <h2 className="text-3xl xl:text-5xl font-bold text-white hover:underline">{post.title}</h2>
            ) : (
                <h3 className="text-3xl xl:text-4xl font-bold text-white hover:underline">{post.title}</h3>
            )}
        </Link>
    )
}

const PostCardV2 = ({ title, size, showShort, post, isList}: PostCardProps) => {
    return (
        <div className={`w-full ${size === 'lg' && !isList && 'xl:col-span-2'} ${isList && 'xl:col-span-1'}`} key={post.title}>
            <div className="p-16 flex flex-col rounded-2xl bg-slate-700 justify-between xl:h-80 gap-6">
                <div className='flex flex-col gap-2 justify-start'>
                    <PostTitle {...{ post, title, isList }} />
                    <PostCategory categories={post.categories} />
                </div>
                {showShort && <p className='text-white'>{post?.shortText}</p>}
            </div>
        </div>
    )
};

export default PostCardV2;