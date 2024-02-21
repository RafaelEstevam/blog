import type { Meta, StoryObj } from '@storybook/react';

import PostCard from './postCard.component';

const meta = {
    title: 'Posts/Cards/Item',
    component: PostCard,
    tags: ['autodocs'],
    argTypes: {
        heading: {
            options: ['H1', 'H2', 'H3'],
            control: { type: 'select' },
        },
    },
} satisfies Meta<typeof PostCard >;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        heading: 'H2',
        showShort: false,
        isList: false,
        highlight: true,
        post: {
            title: 'Post no Storybook',
            content: '',
            createdAt: '06/20/1992',
            createdBy: {
                name: 'Rafael Estevam'
            },
            gallery: [],
            slug: 'post-no-storybook',
            updatedAt: '06/20/1992',
            categories: ['Categoria 1', 'Categoria 2', 'Categoria 3'],
            shortText: 'Só mais um post no storybook',
        },
    },
};