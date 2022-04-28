import Link from "next/link";
import { useState } from "react";

import {
    MenuIcon
} from "@heroicons/react/outline";

const navigation = [
    { name: 'Rank Characters', href: 'http://aniranker.com/select/characters' },
    { name: 'Rank Anime', href: 'http://aniranker.com/select/anime' },
    { name: 'Leaderboard', href: 'http://aniranker.com/leaderboard/characters'},
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Header() {
    const [isActive, setActive] = useState(true);
    const toggleMobileMenu = () => {
        setActive(!isActive);
    }
    
    return (
        <>
        <nav className="bg-white mb-8 shadow-md transition duration-300 ease-in-out">
            <div className="max-w-6xl mx-auto px-10 py-4">
                <div className="flex justify-between">

                    <div className="flex space-x-6 items-center">

                        {/* Navigation Bar Logo */}
                        <div className="flex">
                        <a href="http://aniranker.com/">
                            <span className="text-xl font-bold lowercase">AniRank</span>
                        </a>
                        <a href="http://aniranker.com/" className="mt-0.5">
                            <span className="uppercase font-extrabold text-xs text-gray-400 ml-2">Beta</span>
                        </a>
                        </div>

                        {/* Logo and Left Navigation Spacer */}
                        <div className="hidden md:flex bg-gray-300 w-0.5"><div className="text-gray-300 opacity-10">|</div></div>

                        <div className="hidden md:flex items-center space-x-4 text-gray-500 font-bold text-sm">
                            { navigation.map((item) => (
                                    <Link
                                    key={item.name}
                                    href={item.href}
                                    className=""
                                    >
                                    {item.name}
                                    </Link>
                            ))}
                        </div>

                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMobileMenu}>
                            <MenuIcon className="h-6 w-6" />
                        </button>
                    </div>

                </div>
            </div>

            <div className={classNames(isActive ? "hidden" : "md:hidden")}>
                <div className="flex-col text-gray-700 font-bold text-sm transition duration-200 ease-in-out">
                    { navigation.map((item) => (
                        <a
                        key={item.name}
                        href={item.href}
                        className="block p-6 shadow-xl"
                        >
                        {item.name}
                        </a>
                    ))}
                </div>
            </div>                   

        </nav>
        </>
    )
}