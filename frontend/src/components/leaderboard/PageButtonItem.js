export default function PageButtonItem(props) {
	let url = `https://aniranker.com/leaderboard/${props.type}/${props.number}`;

	if (props.isCurrent == true) {
		return (
			<>
				<a
					href={url}
					className="relative z-10 inline-flex items-center border border-orange-600 bg-zinc-800 bg-zinc-800 px-4 py-2 text-sm font-medium text-orange-600 hover:bg-zinc-700"
				>
					{props.number}
				</a>
			</>
		);
	} else {
		return (
			<>
				<a
					href={url}
					className="relative inline-flex items-center border border-zinc-700 bg-zinc-800 px-4 py-2 font-lato text-sm font-medium text-gray-500 hover:bg-zinc-700"
				>
					{props.number}
				</a>
			</>
		);
	}
}
