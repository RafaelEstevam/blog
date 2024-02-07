'use client';

import Footer from "./components/footer.component";
import Header from "./components/header.component";

const Page = ({children}: any) => {
    return (
        <div className="w-full">
            <div className="w-full px-24 flex flex-col items-center justify-start gap-10 pb-24">
            <Header />
                <main className="w-full flex flex-col items-center justify-start gap-10">
                {children}
                </main>
            </div>
            <Footer/>
        </div>
    )
};

export default Page;