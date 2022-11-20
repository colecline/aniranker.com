import Image from "next/image";

export default function TableElement(props) {
	return (
		<>
			<tr className={props.bg_color}>
				<td>
					<h3 className="text-xl font-bold text-zinc-100">#{props.rank}</h3>
					<span className="mt-1 rounded-full bg-orange-600 px-2 py-0.5 text-sm text-xs font-bold uppercase text-zinc-100">
						{props.wins} votes
					</span>
				</td>
				<td className="justify-left my-2 flex">
					<div
						style={{ position: "relative" }}
						className="h-32 w-20 rounded-lg object-contain"
					>
						<Image
							src={props.src}
							alt={props.name}
							layout="fill"
							className="rounded-xl"
						/>
					</div>
					<h3 className="my-auto ml-4 text-zinc-100">{props.name}</h3>
				</td>
				{props.anime === undefined ? (
					<></>
				) : (
					<td>
						<h3 className="text-zinc-100">{props.anime}</h3>
					</td>
				)}
			</tr>
		</>
	);
}
