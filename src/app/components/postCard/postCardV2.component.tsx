import Link from 'next/link';
import PostCategory from '../postCategory.component';
import { PostProps } from '../../[slug]/post.interface';

interface PostCardProps {
    post: PostProps,
    heading?: 'H1' | 'H2' | 'H3',
    showShort?: boolean,
    isList?: boolean,
    isFull?: boolean,
    highlight?: boolean,
    index?: number
}

const PostCard = ({ post}: PostCardProps) => {

    return (
        <Link href={`${post.slug}`} title={post.title} className='transition-all duration-200 ease-linear border-2 border-slate-700 overflow-hidden rounded-2xl opacity-80 hover:opacity-100 hover:border-blue-600'>
            <div className="w-full flex flex-col md:flex-row">
                <div className={`w-full h-56 md:w-2/4 md:min-h-64 bg-cover`} style={{
                    backgroundImage: `url(${post.gallery[0].url})`,
                    backgroundPosition: 'left center'
                }}>
                </div>
                <div className='p-8 md:w-2/4 flex flex-col md:justify-between gap-4'>
                    <div className="w-full flex flex-col gap-4">
                        <h2 id="title" className="font-bold text-xl text-left w-full text-white hover:underline">{post.title}</h2>
                        {post?.categories && post?.categories.length > 0 && <PostCategory {...{categories: post.categories}} />}
                    </div>
                    <div className='bg-slate-700 py-1 px-2 rounded-lg'>
                        <p className='text-white'>{post.shortText}</p>
                    </div>
                    <div className='flex justify-between'>
                        <div>
                            {post?.createdBy && (
                                <p className='text-white'>por <strong>{post?.createdBy?.name}</strong></p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
};

export default PostCard;