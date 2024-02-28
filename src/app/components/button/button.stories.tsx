import type { Meta, StoryObj } from '@storybook/react';

import Button from './button.component';
import IconsOptions from '../icon/icon.options';

const meta = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        size: {
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            control: { type: 'select' },
        },
        variant: {
            options: ['outlined', 'filled', 'ghost'],
            control: { type: 'select' },
        },
        icon: {
            options: IconsOptions,
            control: { type: 'select' },
        }
    },
} satisfies Meta<typeof Button >;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        id: 'button',
        type: 'button',
        label: "Button",
        size: "md",
        fullScreen: false,
        variant: "outlined",
        color: "primary",
        showIcon: true,
        icon: 'AccessibilityIcon'
    },
};

export const Secondary: Story = {
    args: {
        id: 'button',
        type: 'button',
        label: "Button",
        size: "md",
        fullScreen: false,
        variant: "outlined",
        color: "secondary"
    },
};

export const Danger: Story = {
    args: {
        id: 'button',
        type: 'button',
        label: "Button",
        size: "md",
        fullScreen: false,
        variant: "outlined",
        color: "danger"
    },
};

export const Neutral: Story = {
    args: {
        id: 'button',
        type: 'button',
        label: "Button",
        size: "md",
        fullScreen: false,
        variant: "outlined",
        color: "neutral"
    },
};