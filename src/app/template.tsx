import { Suspense } from "react";
import Footer from "./components/footer.component";
import Header from "./components/header.component";
import Loading from "./components/loading.component";

const Page = ({children}: any) => {
    return (
        <div className="w-full">
            <div className="w-full px-10 xl:px-24 flex flex-col items-center justify-start gap-10 pb-24">
                <Header />
                <main className="w-full flex flex-col items-center justify-start gap-10">
                    <Suspense fallback={<Loading/>}>
                        {children}
                    </Suspense>
                </main>
            </div>
            <Footer/>
        </div>
    )
};

export default Page;