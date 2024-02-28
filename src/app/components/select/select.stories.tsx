import type { Meta, StoryObj } from '@storybook/react';

import Select from './select.component';

const meta = {
    title: 'Components/Select',
    component: Select,
    tags: ['autodocs'],
    argTypes: {
        size: {
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            control: { type: 'select' },
        },
    },
} satisfies Meta<typeof Select >;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        size: 'md',
        id: 'select',
        name: 'select'
    },
};