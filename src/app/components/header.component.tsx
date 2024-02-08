import Link from "next/link";
import SearchComponent from "./search.component";

const Header = async () => {

    return (
        <header className="w-full rounded-b-2xl flex justify-between items-center gap-32 relative">
            <div className="relative z-10">
                <nav>
                    <ul className="flex items-center gap-10">
                        <li><Link href={'/category/frontend'} className="py-10 block">Front-end</Link></li>
                        <li><Link href={'/category/react'} className="py-10 block">React</Link></li>
                        <li><Link href={'/category/javascript'} className="py-10 block">Javascript</Link></li>
                        <li><Link href={'/category/css'} className="py-10 block">CSS</Link></li>
                        <li><Link href={'/category/html'} className="py-10 block">HTML</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="flex flex-col justify-center text-center py-4 absolute inset-x-0">
                <Link href={'/'}>
                    <h1 className="font-bold text-4xl">R&O</h1>
                </Link>
            </div>
            <div className="relative z-10">
                <SearchComponent />
            </div>
        </header>
    );
};

export default Header;