'use client';

import { useSearchParams } from 'next/navigation';
import {useCallback, useEffect, useState} from 'react';
import { gql } from 'graphql-request';
import {gql_client} from '../services';

import PostList from "../components/postList.component";

const SearchContent = () => {

    const skip = 0;
    const searchParams = useSearchParams();
    const search = searchParams.get('q');

    const [page, setPage] = useState(skip);
    const [postsList, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const handlePagination = useCallback(async () => {

        const query = gql`
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

        setPosts(posts);
        setPage(page + 2);
        setLoading(false);

    }, [page, postsList, search]);

    useEffect(() => {
        handlePagination()
    }, [search])

    return loading ? (
        <h3>Carregando...</h3>
    ) : (
        <div className='w-full flex flex-col gap-10'>
            <p>Resultado de: <b>{search}</b></p>
            <div className='w-full flex flex-col gap-10'>
                <PostList postsList={postsList} list />
            </div>
        </div>
    )
};

export default SearchContent;