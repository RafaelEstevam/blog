import Link from "next/link";
import { RelatedPost } from "../post.interface";

interface PostRelatedPostsProps {
    relatedPosts?: RelatedPost[]
}

const PostRelatedPosts = ({relatedPosts}:PostRelatedPostsProps) => {
    return (
        <div className="w-full flex flex-col gap-8">
            <h3 className="text-white text-2xl font-bold">Posts relacionados</h3>
            <ul className='w-full flex flex-wrap gap-4'>
                {relatedPosts?.map((item) => (
                    <li key={item.id} >
                        <Link href={`/${item.slug}`} className='block transition-all duration-150 ease-linear p-4 border-2 border-slate-700 rounded-xl hover:border-blue-600'>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
        
    )
};

export default PostRelatedPosts;