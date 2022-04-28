import Router from "next/router";
import Image from "next/image";

export default function Anime(props) {
    return (
        <>
        <div>
            <a href="javascript:void(0);">
                <div className="transition ease-in-out delay-150 hover:scale-105 border-8 border-gray-500 hover:border-green-500 rounded-lg bg-gray-700">

                    <div style={{position: 'relative'}} className="object-contain h-80 w-56 items-center mx-auto">
                        <Image src={props.src} alt={props.title} onClick={props.imageClick} layout="fill" priority />
                    </div>

                    <div className="bg-gray-800 flex justify-center align-middle">
                        <div className="text-center max-w-200 text-white h-12 min-h-full my-2">
                            <h3 className="anime-title font-semibold mx-auto">{props.title}</h3>
                        </div>
                    </div>
                </div>
            </a>
        </div>
        </>
    )
}