import Image from 'next/image';
import { getPosts } from '../queries/posts';
import { PostProps } from '../[slug]/post.interface';
import PostCategory from './postCategory.component';
import moment from 'moment';
import Link from 'next/link';
import { RiThumbUpFill } from "@remixicon/react";
import PostLike from '../[slug]/components/like.component';

const PostHighlight = async () => {

    const posts:PostProps[] = await getPosts(0,0,1);

    return (
        <div className="w-full flex flex-col border-2 border-slate-700 rounded-2xl overflow-hidden md:flex-row">
            <div className={`w-full h-56 md:w-2/3 md:min-h-[440px] bg-cover`} style={{
                backgroundImage: `url(${posts[0].gallery[0].url})`,
                backgroundPosition: 'left center'
            }}>
            </div>
            <div className='p-10 bg-slate-700 md:w-1/3 flex flex-col md:justify-between gap-4'>
                <div className="w-full flex flex-col gap-4">
                    <Link href={`${posts[0].slug}`} title={posts[0].title}>
                        <h1 id="title" className="font-bold text-3xl text-left w-full text-white hover:underline">{posts[0].title}</h1>
                    </Link>
                    {posts[0]?.categories && posts[0]?.categories.length > 0 && <PostCategory {...{categories: posts[0].categories}} />}
                    <p className="text-white">{moment(new Date(posts[0].createdAt)).format('DD/MM/YYYY')}</p>
                </div>
                <div className='bg-slate-500 py-1 px-2 rounded-lg'>
                    <p className='text-white'>{posts[0].shortText}</p>
                </div>
                <div className='flex justify-between'>
                    <div>
                        {posts[0]?.createdBy && (
                            <p className='text-white'>por <strong>{posts[0]?.createdBy?.name}</strong></p>
                        )}
                    </div>
                    <PostLike offline id={posts[0].id} />
                </div>
            </div>
        </div>
    )
};

export default PostHighlight;