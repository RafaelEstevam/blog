'use client';

import { useSearchParams } from 'next/navigation';
import {useCallback, useEffect, useState} from 'react';
import { gql } from 'graphql-request';
import {gql_client} from '../services';

import PostList from '../components/postList/postList.component';

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
                    id,
                    likes,
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
                    },
                    gallery {
                        id,
                        url,
                    },
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
            <h2 className="text-white text-2xl">Resultado de: <b className='text-2xl'>{search}</b></h2>
            <div className='w-full flex flex-col gap-10'>
                <PostList postsList={postsList} isList heading='H2' showShort/>
            </div>
        </div>
    )
};

export default SearchContent;