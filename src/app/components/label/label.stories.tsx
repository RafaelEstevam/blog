import type { Meta, StoryObj } from '@storybook/react';

import Label from './label.component';

const meta = {
    title: 'Components/Label',
    component: Label,
    tags: ['autodocs'],
    argTypes: {
        size: {
            options: ['xs', 'sm'],
            control: { type: 'select' },
        },
        // variant: {
        //     options: ['filled'],
        //     control: { type: 'select' },
        // },
    },
} satisfies Meta<typeof Label >;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        size: "sm",
        variant: "filled",
        color: "primary",
        label: "Input label"
    },
};