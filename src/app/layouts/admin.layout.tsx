import { ReactNode, Suspense } from "react"
import Loading from "../components/loading.component"

interface AdminLayoutProps {
    children: ReactNode
}

export default function AdminLayout({children}:AdminLayoutProps) {
    return (
        <div className="w-full">
            <Suspense fallback={<Loading/>}>
                {children}
            </Suspense>
        </div>
    )
}