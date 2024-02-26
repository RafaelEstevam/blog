import * as React from "react";
import * as Icons from "@radix-ui/react-icons";
import IconsOptions from "./icon.options";

export interface IconProps {
    icon: string,
}

const Icon = ({icon}:IconProps) => {

    const is:any = Icons;
    const Comp:any = icon && is[icon];

    return (
        <Comp/>
    );
}

Icon.displayName = "Icon";

export default Icon;

export {
    IconsOptions
};