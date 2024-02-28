import type { Meta, StoryObj } from '@storybook/react';

import Input from './input.component';

const meta = {
    title: 'Components/Input',
    component: Input,
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
} satisfies Meta<typeof Input >;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        id: 'input',
        name: 'input',
        size: "md",
        variant: "outlined",
        color: "primary"
    },
};