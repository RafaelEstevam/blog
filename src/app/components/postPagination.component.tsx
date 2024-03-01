"use client";
import { useEffect, useState } from 'react';

import { gql } from 'graphql-request';
import {gql_client} from '../services';
import PostList from './postList/postList.component';


const PostPagination = () => {

    const skip = 3;
    const [newPosts, setNewPosts] = useState([]);

    const handleGetPosts = async () => {
        const query = gql`
        query {
                posts(where: {postType: post}, orderBy: createdAt_DESC, first: 3, skip: ${skip}){
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

        setNewPosts(posts);
    }

    

    useEffect(() => {
        handleGetPosts();
    }, [])

    return (
        <div className="w-full flex flex-wrap gap-10">
            <PostList postsList={newPosts} heading='H2' />
        </div>
    )
};

export default PostPagination;