import NavComponent from "./nav.component";
import SearchComponent from "./search.component";

const Header = async () => {

    return (
        <div className="w-full flex justify-center border-b-2 border-slate-700 px-10">
            <header className="w-full xl:w-5/6 flex justify-between items-center gap-32 relative z-10">
                <div className="relative z-10">
                    <NavComponent />
                </div>
                <div className="flex justify-center text-center py-4 absolute inset-x-0">
                    <a href={'/'}>
                        <h1 className="font-bold text-4xl text-white">R&O</h1>
                    </a>
                </div>
                <div className="relative z-10 hidden md:block xl:block">
                    <SearchComponent />
                </div>
            </header>
        </div>
    );
};

export default Header;