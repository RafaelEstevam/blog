import { cookies } from 'next/headers';
import { PostProps } from "./post.component";

const PostShare = (post:PostProps) => {
    const {value}:any = cookies().get('origin');
    return (
        <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${value}/${post.slug}`}>Linkedin</a>
    )
};

export default PostShare;