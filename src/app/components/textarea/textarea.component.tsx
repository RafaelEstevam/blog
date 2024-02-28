import * as React from "react";
import { cn } from "../../../lib/utils";
import { cva } from "class-variance-authority"
import { InputProps } from "../input/input.component";

const titleVariants = cva(
    "p-4 transition-all duration-150 linear w-full",
    {
        variants: {
            color: {
                primary:"border-slate-700 bg-slate-200 text-slate-500",
                secondary: "border-blue-700 bg-blue-200 text-blue-500",
                danger: "border-red-700 bg-red-200 text-red-500",
                neutral: "border-neutral-700 bg-neutral-200 text-neutral-500"
            },
            variant: {
                outlined:"border-2 bg-transparent",
                filled: "border-2 border-transparent",
            },
            size: {
                xs: 'p-1 rounded text-xs',
                sm: 'p-2 rounded-sm text-sm',
                md: 'p-3 rounded-md text-md',
                lg: 'p-4 rounded-lg text-lg',
                xl: 'p-5 rounded-2xl text-xl',
            },
            disabled: {
                true: 'text-neutral-800 bg-[#00000030]'
            }
            // fullScreen: {
            //     true: 'w-full'
            // },
        },
        
        defaultVariants: {
            size: "md",
            variant: "outlined",
        },
    }
)

export interface TextareaProps extends InputProps {
    value?: string,
}

const Textarea = ({size, variant, color, placeholder, value, disabled, required, ...props}:TextareaProps) => {

    const Comp = "textarea";

    return (
        <Comp
            placeholder={placeholder}
            className={cn(titleVariants({ size, variant, color, disabled }))}
            {...props}
            {...{disabled, required}}
        >
            {value}
        </Comp>
    );
}

Textarea.displayName = "Textarea";

export default Textarea;