import Router from "next/router";
import Image from "next/image";

export default function Character(props) {
    return (
        <>
        <div>
            <a href="javascript:void(0);">
                <div className="transition ease-in-out delay-150 hover:scale-105 border-8 border-gray-500 hover:border-green-500 rounded-lg">
                    
                    <div style={{position: 'relative'}} className="object-fit h-[350px] w-[225px] shadow-inner">
                        <Image src={props.src} alt={props.name} onClick={props.imageClick} layout="fill" priority />
                    </div>

                    <div className="text-center max-w-241 bg-gray-800  text-white pt-2 pb-4">
                        <h3 className="font-semibold mx-auto">{props.name}</h3>
                        <p className="anime-sub-title text-xs mx-auto">{props.anime}</p>
                    </div>
                </div>
            </a>
        </div>
        </>
    )
}