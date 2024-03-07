import Link from 'next/link';
import PostCategory from '../postCategory.component';
import { PostProps } from '../../[slug]/post.interface';
import { RiThumbUpFill } from "@remixicon/react";
import moment from 'moment';
import PostLike from '@/app/[slug]/components/like.component';

interface PostCardProps {
    post: PostProps,
    heading?: 'H1' | 'H2' | 'H3',
    showShort?: boolean,
    isList?: boolean,
    isFull?: boolean,
    highlight?: boolean,
    index?: number
}

interface PostTitleProps {
    heading?: 'H1' | 'H2' | 'H3',
    title: string,
    slug: string,
    likes?: number
}

const PostTitle = ({ heading, slug, title}: PostTitleProps) => {

    return (
        <Link href={`/${slug}`}>
            {heading === 'H1' && (
                <h1 className="text-4xl lg:text-5xl font-bold text-white hover:underline">{title}</h1>
            )}
            {heading === 'H2' && (
                <h2 className="text-3xl lg:text-4xl font-bold text-white hover:underline">{title}</h2>
            )}
            {heading === 'H3' && (
                <h3 className="text-3xl lg:text-3xl font-bold text-white hover:underline">{title}</h3>
            )}
        </Link>
    )
}

const PostCard = ({ heading, showShort, post, isList, index, highlight}: PostCardProps) => {

    const cardSize = () => {
        switch(index){
            case 0:
                return 'md:col-span-3';
            case 1:
                return 'md:col-span-2';
            default:
                return 'md:col-span-1';
        }
    }

    const PostCardClasses = `
        w-full ${cardSize()}
    `

    const CardClasses = `
        ${!highlight ? 'p-10 min-h-64' : 'p-16 min-h-80'}
        ${isList && 'min-h-56'}
    `
    return (
        <div className={`${PostCardClasses}`}>
            <div className={`${CardClasses} flex flex-col rounded-2xl bg-slate-700 justify-between gap-6`}>
                <div className='flex flex-col gap-2 justify-start'>
                    <PostTitle 
                        slug={post.slug}
                        title={post.title}
                        heading={highlight ? 'H1' : heading}
                    />
                    <PostCategory categories={post.categories} />
                    {highlight && <p className="text-white">{moment(new Date(post.createdAt)).format('DD/MM/YYYY')}</p>}
                </div>

                {highlight && (
                    <div className='flex flex-col gap-4'>
                        <p className='bg-slate-500 py-1 px-2 rounded-lg text-white'>{post.shortText}</p>
                        {post?.createdBy && (
                            <p className='text-center text-white'>por <strong>{post?.createdBy?.name}</strong></p>
                        )}
                        {post.likes && (
                            <div className='flex justify-center w-full'>
                                <PostLike {...{like: post.likes, disabledButton: true}} />
                            </div>
                        )}
                    </div>
                )}

                {!highlight && showShort && (
                    <p className='text-white'>{post.shortText}</p>
                )}
                
            </div>
        </div>
    )
};

export default PostCard;