import Link from 'next/link';
import PostCategory from './postCategory.component';
import { PostProps } from '../[slug]/components/post.component';
import moment from 'moment';
import PostContent from '../[slug]/components/content.component';

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
                <h2 className="text-3xl xl:text-5xl font-bold text-white hover:underline">{post.title}</h2>
            ) : (
                <h3 className="text-3xl xl:text-4xl font-bold text-white hover:underline">{post.title}</h3>
            )}
        </Link>
    )
}

const PostCard = ({ title, size, showShort, post, isList, isFull }: PostCardProps) => {
    if (isFull) {

        return (
            <div className={`
                relative
                w-full
                overflow-hidden
                rounded-2xl 
                bg-slate-700
                shadow-2xl
            `}>
                <div className="
                    w-full
                    h-full
                    min-h-96
                    p-16
                    flex 
                    flex-col 
                    justify-between
                    gap-4
                    relative
                ">
                    <div className='flex flex-col gap-2 justify-start'>
                        <Link href={post.slug}>
                            <h1 className="text-5xl font-bold text-white hover:underline">{post.title}</h1>
                        </Link>
                        <PostCategory categories={post.categories} />
                        <p className="text-white">{moment(new Date(post.createdAt)).format('DD/MM/YYYY')}</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='bg-slate-500 py-1 px-2 rounded-lg text-white'>{post.shortText}</p>
                        <p className='text-center text-white'>por <strong>{post.createdBy.name}</strong></p>
                    </div>
                </div>
                {/* <div className='hidden opacity-90 absolute top-0 z-10 bg-black min-h-full w-full lg:block lg:w-full lg:h-auto'></div>
                <img src={`${post?.gallery[0].url}`} className='hidden w-fit absolute top-0 grayscale lg:block lg:w-full lg:h-auto' /> */}
            </div>
        )
    }

    if(isList){
        return (
            <div className={`w-full`} key={post.title}>
                <div className="p-8 flex flex-col rounded-2xl bg-slate-700 justify-between">
                    <PostTitle {...{ post, title }} />
                    <PostCategory categories={post.categories} />
                    <p className='mt-4 text-white'>{post?.shortText}</p>
                </div>
            </div>
        )
    }

    return (
        <div className={`w-full ${size === 'lg' ? 'xl:w-1/2' : 'xl:w-1/4'} xl:pr-10 pb-10`} key={post.title}>
            <div className={`p-16 flex flex-col rounded-2xl bg-slate-700 justify-between`}>
                <div className='flex flex-col gap-2 justify-start'>
                    <PostTitle {...{ post, title }} />
                    <PostCategory categories={post.categories} />
                </div>
                {showShort && <p className='text-white'>{post?.shortText}</p>}
            </div>
        </div>
    )
};

export default PostCard;