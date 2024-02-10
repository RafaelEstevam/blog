'use client';

import { gql } from 'graphql-request';
import {gql_client} from '../../services';
import PostList from '../../components/postList.component';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

const CategoryContent =  () => {

    const params = useParams();
    const {category} = params;
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleGetPosts = async () => {
        const query = gql`
        query {
                posts(
                    where: {categories_contains_some: ${category}}
                    orderBy: createdAt_DESC
                ) {
                    id
                    title
                    categories,
                    slug,
                    shortText
                }
            }
        `;
        const {posts}:any = await gql_client.request(query);
        setPosts(posts);
        setLoading(false);
    }

    useEffect(() => {
        handleGetPosts();
    }, [])

    return loading ? (
        <h3>Carregando...</h3>
    ) : (
        <div className='w-full flex flex-col gap-10'>
            <p className="text-white">Categoria <b>{category}</b></p>
            <div className='w-full flex flex-col gap-10'>
                <PostList postsList={posts} list />
            </div>
        </div>
    )
};

export default CategoryContent;