"use client"

import { usePathname } from 'next/navigation'
import { ReactNode,} from "react";
import DefaultLayout from './layouts/default.layout';
import AdminLayout from './layouts/admin.layout';

interface TemplateProps {
    children: ReactNode
}

const Page = ({children}: TemplateProps) => {

    const isAdmin = usePathname().includes('restrict')

    return !isAdmin ?(
        <DefaultLayout>{children}</DefaultLayout>
    ):(
        <AdminLayout>{children}</AdminLayout>
    )
};

export default Page;