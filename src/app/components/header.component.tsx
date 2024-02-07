import Link from "next/link";
import SearchComponent from "./search.component";

const Header = async () => {

    return (
        <header className="w-full rounded-b-2xl flex justify-between items-center gap-32">
            <div className="flex gap-32">
                <nav>
                    <ul className="flex items-center">
                        <li><Link href={'/category/frontend'} className="py-10 px-4 block">Front-end</Link></li>
                        <li><Link href={'/category/react'} className="py-10 px-4 block">React</Link></li>
                        <li><Link href={'/category/javascript'} className="py-10 px-4 block">Javascript</Link></li>
                        <li><Link href={'/category/css'} className="py-10 px-4 block">CSS</Link></li>
                        <li><Link href={'/category/html'} className="py-10 px-4 block">HTML</Link></li>
                    </ul>
                </nav>
                <div className="flex flex-col justify-center text-center py-4">
                    <Link href={'/'}>
                        <h1 className="font-bold text-4xl">ED&D</h1>
                    </Link>
                    {/* <p className="text-xs">Estevam Design <br/> & Desenvolvimento</p> */}
                </div>
            </div>
            <div>
                <SearchComponent />
            </div>
        </header>
    );
};

export default Header;