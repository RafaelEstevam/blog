import Link from 'next/link';
import PostCategory from '../postCategory.component';
import { PostProps } from '../../[slug]/post.interface';
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

    console.log(post)

    return (
        <div>
            <h2 className='text-white text-3xl'>{post.title}</h2>
        </div>
    )
};

export default PostCard;