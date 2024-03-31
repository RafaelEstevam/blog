import NavComponent from "./nav.component";
import SearchComponent from "./search.component";

const Header = async () => {

    return (
        <header className="w-full rounded-b-2xl flex justify-between items-center gap-32 relative z-10">
            <div className="relative z-10">
                <NavComponent />
            </div>
            <div className="flex justify-center text-center py-4 absolute inset-x-0">
                <a href={'/'}>
                    <h1 className="font-bold text-4xl text-white">R&O</h1>
                </a>
            </div>
            <div className="relative z-10 hidden xl:block">
                <SearchComponent />
            </div>
        </header>
    );
};

export default Header;