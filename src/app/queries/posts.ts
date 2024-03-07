import { gql } from 'graphql-request';
import {gql_client} from '../services';
import { PostProps } from '../[slug]/post.interface';

export const getPosts = async (skip:number, page:number, first: number) => {
    const query = gql`
    query {
            posts(where: {postType: post}, orderBy: createdAt_DESC, first: ${first}, skip: ${skip + page}){
                id,
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
                likes
            }
        }
    `;

    const {posts}:any = await gql_client.request(query);
    const postList: PostProps[] = posts;
    return postList;
};

export const getAllPosts = async () => {
    const query = gql`
        query Posts{
            posts{
                id,
                slug,
                title,
                shortText,
                likes
            }
        }
    `;

    const {posts}:any = await gql_client.request(query);
    const postList: PostProps[] = posts;
    return postList;

};

export const getPost = async (variables:any) => {

    const query = gql`
        query Posts($slug:String!) {
            post(where:{slug:$slug}){
                id,
                title,
                slug,
                content{
                    html
                },
                gallery {
                    id,
                    url,
                },
                categories,
                createdAt,
                updatedAt,
                shortText,
                createdBy{
                    id,
                    name
                },
                likes
            }
        }
    `;

    const {post}:any = await gql_client.request(query, variables);
    const item:PostProps = post;
    return item;
    
};

export const IncreaseLikeByPost = async(variables:any) => {

    const mutation = gql`
        mutation Post($id:ID!, $likes: Int!) {
            updatePost(	
            where: {id:$id }
            data: {likes:$likes}
        ){
            id
            likes
        }
            publishPost(to: PUBLISHED, where: {id:$id }) {
                id
            }
        }
    `;

    const {publishPost, updatePost}:any = await gql_client.request(mutation, variables);
    return {publishPost, updatePost} ;

};

export const getLikesByPost = async(variables: any) => {
    const query = gql`
        query Posts($id:ID!) {
            post(where:{id:$id}){
                id,
                likes
            }
        }
    `;

    const {post}:any = await gql_client.request(query, variables);
    const item:PostProps = post;
    return item;
}
