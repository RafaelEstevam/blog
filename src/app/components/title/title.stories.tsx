import type { Meta, StoryObj } from '@storybook/react';

import Title from './title.component';

const meta = {
    title: 'Components/Title',
    component: Title,
    tags: ['autodocs'],
    argTypes: {
        heading: {
            options: ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'],
            control: { type: 'select' },
        },
        variant: {
            options: ['link', 'default'],
            control: { type: 'select' },
        },
    },
} satisfies Meta<typeof Title >;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        heading: 'H4',
        title: 'Heading H4',
        variant: 'default',
    },
};