import * as React from "react";
import { cn } from "../../../lib/utils";
import { cva } from "class-variance-authority"

const titleVariants = cva(
    "p-4 transition-all duration-150 linear w-full",
    {
        variants: {
            color: {
                primary:"bg-slate-200 text-slate-500",
                secondary: "bg-blue-200 text-blue-500",
                danger: "bg-red-200 text-red-500",
                neutral: "bg-neutral-200 text-neutral-500"
            },
            variant: {
                filled: "",
            },
            size: {
                xs: 'p-1 rounded text-xs',
                sm: 'p-2 rounded-sm text-sm',
            },
        },
        
        defaultVariants: {
            size: "xs",
            variant: "filled",
        },
    }
)

export interface LabelProps {
    size?: 'xs' | 'sm',
    variant?: 'filled',
    color?: 'primary' | 'secondary' | 'danger' | 'neutral',
    label?: string,
    required?:boolean,
}

const Label = ({size, variant, color, label, required, ...props}:LabelProps) => {

    const Comp = "label";

    return (
        <Comp
            className={cn(titleVariants({ size, variant, color }))}
            {...props}
        >{label}{required && '*'}</Comp>
    );
}

Label.displayName = "Label";

export default Label;