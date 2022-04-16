import Image from "next/image";

export default function TableElement(props) {
    return (
        <>
        <tr className={props.bg_color}>
            <td>
                <h3 className="font-bold text-xl">{props.rank}</h3>
                <span className="text-xs">({props.rating})</span>
            </td>
            <td className="flex justify-left my-2">
                <img className="object-contain h-32 rounded-lg" src={props.src} />
                <h3 className="my-auto ml-4 font-bold">{props.name}</h3>
            </td>
            {props.anime === undefined ? <></>: <td><h3 className="font-bold">{props.anime}</h3></td> }
        </tr>
        </>
    )
}