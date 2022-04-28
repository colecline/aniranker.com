import Router from "next/router";
import Image from "next/image";

export default function Anime(props) {
    return (
        <>

        {/* Desktop */}
        <div className="hidden md:flex">
            <a href="javascript:void(0);">
                <div className="transition ease-in-out delay-150 hover:scale-105 border-8 border-gray-500 hover:border-green-500 rounded-lg">
                

                    <div style={{position: 'relative'}} className="object-contain h-80 w-56 items-center mx-auto">
                        <Image src={props.src} alt={props.title} onClick={props.imageClick} layout="fill" eager />
                    </div>

                    <div className="flex justify-center items-center text-center max-w-241 character-container bg-gray-800 text-white pt-2 pb-4 px-2">
                        <div>
                            <h3 className="font-semibold text-sm mx-auto">{props.title}</h3>
                        </div>
                    </div>
                </div>
            </a>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
            <a href="javascript:void(0);">
                <div className="transition ease-in-out delay-150 hover:scale-105 border-8 border-gray-500 hover:border-green-500 rounded-lg">
                    
                    <div style={{position: 'relative'}} className="object-fit h-[225px] w-[150px] shadow-inner">
                        <Image src={props.src} alt={props.title} onClick={props.imageClick} layout="fill" priority={true} />
                    </div>

                    <div className="flex items-center justify-center text-center max-w-241 character-container-mobile bg-gray-800  text-white pt-2 pb-4 px-1">
                        <div>
                            <h3 className="font-semibold mx-auto text-sm">{props.title}</h3>
                        </div>
                    </div>
                </div>
            </a>
        </div>
        </>
    )
}