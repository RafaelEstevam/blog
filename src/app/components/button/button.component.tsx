import * as React from "react";
import { cn } from "../../../lib/utils";
import { cva } from "class-variance-authority"
import Icon from "../icon/icon.component";

const titleVariants = cva(
    "p-4 transition-all duration-150 linear flex items-center justify-center gap-2",
    {
        variants: {
            color: {
                primary:"border-slate-700 bg-slate-700 text-slate-500",
                secondary: "border-blue-700 bg-blue-700 text-blue-500",
                danger: "border-red-700 bg-red-700 text-red-500",
                neutral: "border-neutral-700 bg-neutral-700 text-neutral-500"
            },
            variant: {
                outlined:"border-2 bg-transparent hover:border-opacity-30",
                filled: "opacity-80 text-white border-2 border-transparent hover:opacity-100",
                ghost: "opacity-80 border-2 bg-transparent border-transparent hover:bg-[#00000030] hover:shadow-md",
            },
            size: {
                xs: 'p-1 rounded text-xs',
                sm: 'p-2 rounded-sm text-sm',
                md: 'p-3 rounded-md text-md',
                lg: 'p-4 rounded-lg text-lg',
                xl: 'p-5 rounded-2xl text-xl',
            },
            fullScreen: {
                true: 'w-full'
            },
        },
        
        defaultVariants: {
            size: "md",
            variant: "outlined",
            color: "neutral"
        },
    }
)

export interface ButtonProps {
    id: string,
    label: string,
    type: string,
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
    fullScreen?: boolean,
    variant?: 'outlined' | 'filled' | 'ghost',
    color?: 'primary' | 'secondary' | 'danger' | 'neutral',
    showIcon?: boolean,
    icon?: any,
}

const Button = ({label, size, variant, fullScreen, color, showIcon, icon, type, ...props}:ButtonProps) => {

    const Comp = "button";

    return (
        <Comp
            className={cn(titleVariants({ size, variant, fullScreen, color }))}
            {...props}
        >
            {showIcon && (<Icon icon={icon}/>)}
            {label}
        </Comp>
    );
}

Button.displayName = "Button";

export default Button;