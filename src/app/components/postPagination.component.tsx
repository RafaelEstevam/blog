"use client";
import { useCallback, useEffect, useState } from 'react';

import { gql } from 'graphql-request';
import {gql_client} from '../services';
import PostList from './postList/postList.component';
import { PostProps } from '../[slug]/components/post.component';


const PostPagination = () => {

    const skip = 3;
    const [page, setPage] = useState(0);
    const [newPosts, setNewPosts] = useState<PostProps[]>([]);
    const [disabled, setDisabled] = useState<boolean>(false);

    const handlePushPosts = useCallback((posts: PostProps[]) => {
        setNewPosts([...newPosts, ...posts]);
        setPage(page + skip);

        if(posts.length === 0){
            setDisabled(true);
        }

    }, [newPosts, page])

    const handleGetPosts = async () => {
        const query = gql`
        query {
                posts(where: {postType: post}, orderBy: createdAt_DESC, first: 3, skip: ${skip + page}){
                    title,
                    slug,
                    shortText,
                    content{
                        html
                    },
                    categories,
                    createdAt,
                    updatedAt,
                    createdBy{
                        id,
                        name
                    }
                }
            }
        `;

        const {posts}:any = await gql_client.request(query);
        
        handlePushPosts(posts)
    }
    
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
                className={`bg-blue-600 ${disabled && 'bg-slate-500'} w-full p-4 rounded-2xl hover:bg-blue-800 ${disabled && 'hover:bg-slate-500'}`}>
                {!disabled ? 'Buscar mais posts' : 'Sem novos posts'}
            </button>
        </>

    )
};

export default PostPagination;