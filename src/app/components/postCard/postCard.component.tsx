import Link from 'next/link';
import PostCategory from '../postCategory.component';
import { PostProps } from '../../[slug]/components/post.component';
import moment from 'moment';
import Title from '../title/title.component';

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
}

const PostTitle = ({ heading, slug, title}: PostTitleProps) => {

    return (
        <Link href={`/${slug}`}>
            {heading === 'H1' && (
                <Title title={title} heading='H1' variant='link' />
            )}
            {heading === 'H2' && (
                <Title title={title} heading='H2' variant='link'/>
            )}
            {heading === 'H3' && (
                <Title title={title} heading='H3' variant='link'/>
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