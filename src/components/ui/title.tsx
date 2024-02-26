import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority"

const titleVariants = cva(
    "dark:text-white font-bold",
    {
        variants: {
            variant: {
                
            },
            size: {
                H1: 'text-4xl lg:text-5xl',
                H2: 'text-3xl lg:text-4xl',
                H3: 'text-3xl',
                H4: 'text-2xl',
                H5: 'text-lg',
                H6: 'text-md',
            },
        },
        defaultVariants: {
            size: "H4",
        },
    }
)

export interface TitleProps {
    title: string,
    heading?: 'H1' | 'H2' | 'H3'| 'H4' | 'H5' | 'H6',
}

const Title = ({title, heading, ...props}:TitleProps) => {

    const getHeading = () => {
        switch(heading){
            case 'H1': return "h1" ;
            case 'H2': return "h2";
            case 'H3': return "h3";
            case 'H5': return "h5";
            case 'H6': return "h6";
            default:
                return 'h4'
        }
    }

    const Comp = getHeading();

    return (
        <Comp
            className={cn(titleVariants({ size:heading }))}
            {...props}
        >
            {title}
        </Comp>
    );
}

Title.displayName = "Title";

export { Title, titleVariants }