import type { Meta, StoryObj } from '@storybook/react';

import Textfield from './textfield.component';

const meta = {
    title: 'Components/Textfield',
    component: Textfield,
    tags: ['autodocs'],
    argTypes: {
        color: {
            options: ['primary', 'secondary', 'danger', 'neutral'],
            control: { type: 'select' },
        },
        size: {
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            control: { type: 'select' },
        },
        variant: {
            options: ['outlined', 'filled'],
            control: { type: 'select' },
        },
        type: {
            options: ['input', 'textarea'],
            control: {type: 'radio'}
        }
    },
} satisfies Meta<typeof Textfield >;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        input:{
            size: "sm",
            color: "primary",
            placeholder: "Input",
            variant: "filled"
        },
        label:{
            label: "Input label",
            size: "xs",
            color: "primary",
            variant: "filled"
        },
        required: false,
        disabled: false,
        showLabel: true,
        color: "primary",
        size: "md",
        variant: "filled",
        placeholder: "TextField",
        type: 'input'
    },
};