import { cookies } from 'next/headers';
import { PostProps } from "./post.component";

const PostShare = (post:PostProps) => {
    const {value}:any = cookies().get('origin');
    return (
        <div className='flex gap-4 justify-start w-full xl:w-2/3 xl:justify-center'>
            <h4 className='font-bold'>Compartilhar em: </h4>
            <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${value}/${post.slug}`}>Linkedin</a>
        </div>
    )
};

export default PostShare;