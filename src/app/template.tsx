"use client"

import { usePathname } from 'next/navigation'
import DefaultTemplate, { TemplateProps } from './templates/default.template';
import RestrictTemplate from './templates/restrict.template';

const Page = ({children}: TemplateProps) => {

    const isAdmin = usePathname().includes('restrict')

    return !isAdmin ?(
        <DefaultTemplate>{children}</DefaultTemplate>
    ):(
        <RestrictTemplate>{children}</RestrictTemplate>
    )
};

export default Page;