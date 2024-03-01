import { gql } from 'graphql-request';
import {gql_client} from '../services';
import { PostProps } from '../[slug]/components/post.component';

export const getPosts = async (skip:number, page:number, first: number) => {
    const query = gql`
    query {
            posts(where: {postType: post}, orderBy: createdAt_DESC, first: ${first}, skip: ${skip + page}){
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
                shortText
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
                }
            }
        }
    `;

    const {post}:any = await gql_client.request(query, variables);
    const item:PostProps = post;
    return item;
    
};
