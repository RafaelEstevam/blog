import type { Meta, StoryObj } from '@storybook/react';

import Textarea from './textarea.component';

const meta = {
    title: 'Components/Textarea',
    component: Textarea,
    tags: ['autodocs'],
    argTypes: {
        size: {
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            control: { type: 'select' },
        },
        variant: {
            options: ['outlined', 'filled'],
            control: { type: 'select' },
        },
    },
} satisfies Meta<typeof Textarea >;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        size: "md",
        variant: "outlined",
        color: "primary"
    },
};