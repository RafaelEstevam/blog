import type { Meta, StoryObj } from '@storybook/react';

import PostList, {PostListProps} from './postList.component';
import PostCard from '../postCard/postCard.component';

const meta = {
    title: 'Posts/Cards/List',
    component: PostList,
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs'],
    argTypes: {
        heading: {
            options: ['H1', 'H2', 'H3'],
            control: { type: 'select' },
        },
    },
}

export default meta;
type Story = StoryObj<typeof PostList>;

export const List: Story = {
    render: ({ postsList, isList, showShort, heading }) => {
        return (
            <PostList {...{postsList, isList, heading, showShort}}/>
        );
    },
    args: {
        isList: true,
        showShort: true,
        heading: 'H2',
        postsList: [
            {title: 'Post 1', content: '', createdAt: '06/20/2024', createdBy: {name: 'Rafael Estevam'}, gallery: [], slug: 'post-1', updatedAt: '', categories: ['Categoria'], shortText: 'Esse é um resumo do post' },
            {title: 'Post 2', content: '', createdAt: '06/20/2024', createdBy: {name: 'Rafael Estevam'}, gallery: [], slug: 'post-2', updatedAt: '', categories: ['Categoria'], shortText: 'Esse é um resumo do post' },
            {title: 'Post 3', content: '', createdAt: '06/20/2024', createdBy: {name: 'Rafael Estevam'}, gallery: [], slug: 'post-3', updatedAt: '', categories: ['Categoria'], shortText: 'Esse é um resumo do post' },
            {title: 'Post 4', content: '', createdAt: '06/20/2024', createdBy: {name: 'Rafael Estevam'}, gallery: [], slug: 'post-4', updatedAt: '', categories: ['Categoria'], shortText: 'Esse é um resumo do post' },
            {title: 'Post 5', content: '', createdAt: '06/20/2024', createdBy: {name: 'Rafael Estevam'}, gallery: [], slug: 'post-5', updatedAt: '', categories: ['Categoria'], shortText: 'Esse é um resumo do post' },
            {title: 'Post 6', content: '', createdAt: '06/20/2024', createdBy: {name: 'Rafael Estevam'}, gallery: [], slug: 'post-6', updatedAt: '', categories: ['Categoria'], shortText: 'Esse é um resumo do post' },
            {title: 'Post 7', content: '', createdAt: '06/20/2024', createdBy: {name: 'Rafael Estevam'}, gallery: [], slug: 'post-7', updatedAt: '', categories: ['Categoria'], shortText: 'Esse é um resumo do post' },
            {title: 'Post 8', content: '', createdAt: '06/20/2024', createdBy: {name: 'Rafael Estevam'}, gallery: [], slug: 'post-8', updatedAt: '', categories: ['Categoria'], shortText: 'Esse é um resumo do post' },
            {title: 'Post 9', content: '', createdAt: '06/20/2024', createdBy: {name: 'Rafael Estevam'}, gallery: [], slug: 'post-9', updatedAt: '', categories: ['Categoria'], shortText: 'Esse é um resumo do post' },
            {title: 'Post 10', content: '', createdAt: '06/20/2024', createdBy: {name: 'Rafael Estevam'}, gallery: [], slug: 'post-10', updatedAt: '', categories: ['Categoria'], shortText: 'Esse é um resumo do post' },
        ],
    }
}