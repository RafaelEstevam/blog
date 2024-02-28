import * as React from "react";
import { cn } from "../../../lib/utils";
import { cva } from "class-variance-authority"
import { InputProps } from "../input/input.component";

const selectVariants = cva(
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
        },
        
        defaultVariants: {
            size: "md",
            variant: "outlined",
        },
    }
);

interface OptionProps{
    value: string,
    label: string,
}

export interface SelectProps extends InputProps {
    options?: OptionProps[]
}

const Select = ({size, variant, color, placeholder, value, disabled, required, options, ...props}:SelectProps) => {

    const Comp = "select";

    return (
        <Comp
            className={cn(selectVariants({ size, variant, color, disabled }))}
            {...props}
            {...{disabled, required}}
        >
            <option className="text-slate-700" value="">Selecione uma opção...</option>
            {options?.map((option) => (
                <option className="text-slate-700" value={option.value}>{option.label}</option>
            ))}
        </Comp>
    );
}

Select.displayName = "Select";

export default Select;