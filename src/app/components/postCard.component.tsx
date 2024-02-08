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

const PostTitle = ({ title, post }: PostCardProps) => {
    const origin = '';
    return (
        <Link href={`${origin}/${post.slug}`}>
            {title === 'H2' ? (
                <h2 className="text-5xl font-bold">{post.title}</h2>
            ) : (
                <h3 className="text-4xl font-bold">{post.title}</h3>
            )}
        </Link>
    )
}

const PostCard = ({ title, size, showShort, post, isList, isFull }: PostCardProps) => {
    if (isFull) {
        return (
            <div className="w-full p-16 rounded-2xl bg-slate-800 flex flex-col justify-between min-h-96">
                <div className='flex flex-col gap-2 justify-start'>
                    <Link href={post.slug}>
                        <h1 className="text-5xl font-bold">{post.title}</h1>
                    </Link>
                    <PostCategory categories={post.categories} />
                    <p>{post.createdAt}</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='bg-slate-500 p-1 rounded-lg'>{post.shortText}</p>
                    <p className='text-center'>por <strong>{post.createdBy.name}</strong></p>
                </div>
            </div>
        )
    }

    if(isList){
        return (
            <div className={`w-full`} key={post.title}>
                <div className="p-8 flex flex-col rounded-2xl bg-slate-800 justify-between">
                    <PostTitle {...{ post, title }} />
                    <PostCategory categories={post.categories} />
                </div>
            </div>
        )
    }

    return (
        <div className={`${size === 'lg' ? 'w-1/2' : 'w-1/4'} pr-10 pb-10`} key={post.title}>
            <div className="p-16 flex flex-col rounded-2xl bg-slate-800 justify-between h-80">
                <div className='flex flex-col gap-2 justify-start'>
                    <PostTitle {...{ post, title }} />
                    <PostCategory categories={post.categories} />
                </div>
                {showShort && <p>{post?.shortText}</p>}
            </div>
        </div>
    )
};

export default PostCard;