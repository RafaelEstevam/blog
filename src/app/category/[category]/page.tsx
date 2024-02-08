'use client';

import { gql } from 'graphql-request';
import {gql_client} from '../../services';
import PostList from '../../components/postList.component';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

const Category =  () => {

    const params = useParams();
    const {category} = params;
    const [posts, setPosts] = useState([]);

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
                    slug
                }
            }
        `;
        const {posts}:any = await gql_client.request(query);
        setPosts(posts);
    }

    useEffect(() => {
        handleGetPosts();
    }, [])

    return (
        <div className="w-full flex flex-col gap-10">
            <div className='w-full'>
                <h2><b>Categoria:</b> {category}</h2>
            </div>
            <PostList postsList={posts} list />
        </div>
    )
};

export default Category;