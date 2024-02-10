import { cookies } from 'next/headers';
import { PostProps } from "./post.component";

const PostShare = async (slug: string) => {
    return (
        <div className='flex gap-4 justify-start w-full xl:w-2/3 xl:justify-center text-white'>
            <h4 className='font-bold text-white'>Compartilhar em: </h4>
            <a className="text-white" href={`https://www.linkedin.com/shareArticle?mini=true&url=${slug}`}>Linkedin</a>
        </div>
    )
};

export default PostShare;