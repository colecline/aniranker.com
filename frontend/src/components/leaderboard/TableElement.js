import Image from "next/image";

export default function TableElement(props) {
    return (
        <>
        <tr className={props.bg_color}>
            <td>
                <h3 className="font-lato font-extrabold text-xl">#{props.rank}</h3>
            </td>
            <td className="flex justify-left my-2">
                <div style={{position: 'relative'}} className="object-contain h-32 w-20 rounded-lg">
                    <Image src={props.src} alt={props.name} layout="fill" className="rounded-xl" />
                </div>
                {/* <img className="object-contain h-32 rounded-lg" alt={props.name} src={props.src} /> */}
                <h3 className="my-auto ml-4 font-lato">{props.name}</h3>
            </td>
            {props.anime === undefined ? <></>: <td><h3 className="font-lato">{props.anime}</h3></td> }
        </tr>
        </>
    )
}