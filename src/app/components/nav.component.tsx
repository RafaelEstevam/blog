'use client'

import { useState } from "react";
import SearchComponent from "./search.component";

const NavComponent = () => {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <div>
            <button className="xs:block xl:hidden bg-white p-4 uppercase rounded-xl text-black font-bold my-6" onClick={() => setShowMenu(true)}>Menu</button>
            <nav className={`
                ${showMenu ? 'block' : 'hidden' }
                fixed
                top-0
                left-0
                bg-[#00000099]
                h-full
                w-full
                py-6
                px-10
                backdrop-blur-md 
                flex 
                flex-col
                items-left
                gap-10
                overflow-y-auto
                xl:backdrop-blur-none
                xl:relative
                xl:bg-transparent
                xl:flex-col 
                xl:gap-0 
                xl:block
                xl:h-fit
                xl:w-fit
                xl:p-0
            `}>
                <div>
                    <button className="xs:block xl:hidden bg-white p-4 uppercase rounded-xl text-black font-bold" onClick={() => setShowMenu(false)}>Fechar</button>
                </div>
                <ul className="flex gap-10 flex-col xl:flex-row items-start xl:items-center">
                    <li><a href={'/category/frontend'} className="block xl:py-10 text-white">Front-end</a></li>
                    <li><a href={'/category/react'} className="block xl:py-10 text-white">React</a></li>
                    <li><a href={'/category/javascript'} className="block xl:py-10 text-white">Javascript</a></li>
                    <li><a href={'/category/css'} className="block xl:py-10 text-white">CSS</a></li>
                    <li><a href={'/category/html'} className="block xl:py-10 text-white">HTML</a></li>
                </ul>
                <div className="block xl:hidden">
                    <SearchComponent />
                </div>
                
            </nav>
        </div>
    )
};

export default NavComponent