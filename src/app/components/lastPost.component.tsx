import { gql } from 'graphql-request';
import {gql_client} from '../services';
import Link from 'next/link';

const query = gql`
    query {
        posts(last:1){
        title,
        slug,
        shortText,
        categories,
        createdAt,
        createdBy{
                id,
                name
            }
        }
    }
`;


const LastPost = async () => {

    const {posts}:any = await gql_client.request(query);
    const post = posts[0];

    return (
        <div className="w-full p-16 rounded-2xl bg-slate-800 flex flex-col justify-between min-h-96">
            <div className='flex flex-col gap-2 justify-start'>
                <Link href={post.slug}>
                    <h1 className="text-5xl font-bold">{post.title}</h1>
                </Link>
                <div className='flex gap-4 pt-2'>
                    {post.categories?.map((category: any) => (
                        <p className='bg-slate-500 p-1 rounded-2xl text-xs' key={category}>{category}</p>
                    ))}
                </div>
                <p>{post.createdAt}</p>
            </div>
            <div className='flex flex-col gap-4'>
                <p className='bg-slate-500 p-1 rounded-lg'>{post.shortText}</p>
                <p className='text-center'>por <strong>{post.createdBy.name}</strong></p>
            </div>
            
        </div>
    )
};

export default LastPost;