'use client'

import {useCallback, useState} from 'react';
import { gql } from 'graphql-request';
import {gql_client} from '../services';
import PostList from './postList.component';

const LoadMorePosts = () => {

    const skip = 3;

    const [page, setPage] = useState(skip);
    const [postsList, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [morePosts, setMorePosts] = useState(true);

    const handlePagination = useCallback(async () => {

        setLoading(true);

        const query = gql`
            query {
                posts(first: ${page}, skip: ${skip}, orderBy: createdAt_DESC){
                    title,
                    slug,
                    shortText,
                    categories,
                }
            }
        `;

        const {posts}:any = await gql_client.request(query);

        if(postsList.length === posts.length) {
            setMorePosts(false)
        }

        setPosts(posts);
        setPage(page + 2);
        setLoading(false);

    }, [page, postsList]);

    return (
        <>
            <PostList postsList={postsList} />
            {loading ? (
                <p>Carregando...</p>
            ) : (
                <button className="w-full bg-slate-500 p-4 uppercase rounded-xl text-white font-bold" disabled={!morePosts} onClick={() => handlePagination()}>{morePosts ? 'Carregar mais' : 'Sem novos posts'}</button>
            )}
        </>
    )
};

export default LoadMorePosts;