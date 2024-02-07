'use client';

import { useSearchParams } from 'next/navigation';
import {useCallback, useEffect, useState} from 'react';
import { gql } from 'graphql-request';
import {gql_client} from '../services';

import PostList from "../components/postList.component";

const Search = () => {

    const skip = 0;
    const searchParams = useSearchParams();
    const search = searchParams.get('q');
    const category = searchParams.get('c');

    const [page, setPage] = useState(skip);
    const [postsList, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [morePosts, setMorePosts] = useState(true);

    const handlePagination = useCallback(async () => {

        const query = category ? gql`
            query {
                posts(
                    where: {
                        OR: {title_contains: "${search}"},
                        AND: {categories_contains_some: ${category}}
                    }, orderBy: createdAt_DESC){
                    title,
                    slug,
                    shortText,
                    categories,
                }
            }
        ` : gql`
            query {
                posts(
                    where: {
                        OR: {title_contains: "${search}"}
                    }, orderBy: createdAt_DESC){
                    title,
                    slug,
                    shortText,
                    categories,
                }
            }`;

        const {posts}:any = await gql_client.request(query);

        if(postsList.length === posts.length) {
            setMorePosts(false)
        }

        setPosts(posts);
        setPage(page + 2);
        setLoading(false);

    }, [page, postsList]);

    useEffect(() => {
        handlePagination()
    }, [])

    return loading ? (
        <h3>Carregando...</h3>
    ) : (
        <>
            <div className='w-full'>
                <p>Resultado de: <b>{search}</b></p>
            </div>
            <PostList postsList={postsList} list />
        </>
    )
};

export default Search; 