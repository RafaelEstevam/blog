"use client";
import { useCallback, useState } from 'react';
import PostList from './postList/postList.component';
import { PostProps } from '../[slug]/post.interface';
import { getPosts } from '../queries/posts';


const PostPagination = () => {

    const skip = 3;
    const first = 3;
    const pagination = 3;

    const [page, setPage] = useState(0);
    const [newPosts, setNewPosts] = useState<PostProps[]>([]);
    const [disabled, setDisabled] = useState<boolean>(false);

    const handlePushPosts = useCallback((posts: PostProps[]) => {
        setNewPosts([...newPosts, ...posts]);
        setPage(page + pagination);

        if(posts.length === 0){
            setDisabled(true);
        }
    }, [newPosts, page]);

    const handleGetPosts = async () => {
        const posts = await getPosts(skip, page, first);
        handlePushPosts(posts);
    };

    return (
        <>
            {newPosts.length > 0 && (
                <div className="w-full flex flex-wrap gap-10">
                    <PostList postsList={newPosts} heading='H2' />
                </div>
            )}
            <button
                disabled={disabled}
                onClick={() => handleGetPosts()}
                className={`bg-blue-600 ${disabled && 'bg-slate-500'} text-white w-full p-4 rounded-2xl hover:bg-blue-800 ${disabled && 'hover:bg-slate-500'}`}>
                {!disabled ? 'Buscar mais posts' : 'Sem novos posts'}
            </button>
        </>

    )
};

export default PostPagination;