import Link from "next/link";
import { useState } from "react";

import {
    MenuIcon,
} from "@heroicons/react/outline";

const navigation = [
    { name: 'Characters', href: 'http://aniranker.com/select/characters' },
    { name: 'Anime', href: 'http://aniranker.com/select/anime' },
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
        <nav className="font-lato bg-white md:bg-transparent transition duration-300 ease-in-out">
            <div className="max-w-6xl mx-auto px-10 py-4">
                <div className="flex justify-between md:bg-white md:py-4 md:px-10 md:rounded-lg md:shadow-md">

                    <div className="flex space-x-6 items-center">
                        {/* Navigation Bar Logo */}
                        <div className="flex">
                        <a href="http://aniranker.com/">
                            <span className="text-xl font-sans font-extrabold lowercase">AniRanker</span>
                        </a>
                        </div>

                        <div className="hidden md:flex items-center space-x-4 text-gray-500 font-bold text-md">
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

                    <div>
                        {/* <div className="hidden md:block">
                            <div className="flex">
                            <span>GitHub</span>
                            </div>
                        </div> */}

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button onClick={toggleMobileMenu}>
                                <MenuIcon className="h-6 w-6" />
                            </button>
                        </div>
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