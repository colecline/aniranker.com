import {
	ChevronLeftIcon,
	ChevronRightIcon,
	SearchIcon,
} from "@heroicons/react/solid";
import PageButtonItem from "./PageButtonItem";

export default function PageButtonTop(props) {
	const buttons = [];

	function buildItems(currentPageNumber) {
		if (!(currentPageNumber == 1)) {
			buttons.push(
				<a
					href={`https://aniranker.com/leaderboard/${props.type}/${
						props.current - 1
					}`}
					className="relative inline-flex items-center rounded-l-md border border-zinc-700 bg-zinc-800 px-2 py-2 text-sm font-medium text-gray-500 hover:bg-zinc-700"
				>
					<span className="sr-only">Previous</span>
					<ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
				</a>
			);
		}

		if (currentPageNumber >= 1 && currentPageNumber <= 3) {
			for (var i = 1; i <= 3; i++) {
				buttons.push(
					<PageButtonItem
						isCurrent={i == props.current}
						type={props.type}
						number={i}
					/>
				);
			}
			if (currentPageNumber == 2) {
				addItemsToRight(2, currentPageNumber + 1);
			}
			if (currentPageNumber == 3) {
				addItemsToRight(2, currentPageNumber);
			}
		}

		if (currentPageNumber > 3) {
			buttons.push(
				<PageButtonItem isCurrent={false} type={props.type} number={1} />
			);
			buttons.push(
				<span className="relative inline-flex items-center border border-zinc-700 bg-zinc-800 px-4 py-2 text-sm font-medium text-gray-700">
					...
				</span>
			);
		}

		if (currentPageNumber > 3 && currentPageNumber <= props.pages - 3) {
			for (var i = currentPageNumber - 1; i <= currentPageNumber + 1; i++) {
				buttons.push(
					<PageButtonItem
						isCurrent={i == props.current}
						type={props.type}
						number={i}
					/>
				);
			}
		}

		if (currentPageNumber <= props.pages - 3) {
			buttons.push(
				<span className="relative inline-flex items-center border border-zinc-700 bg-zinc-800 px-4 py-2 text-sm font-medium text-zinc-400">
					...
				</span>
			);
			buttons.push(
				<PageButtonItem
					isCurrent={false}
					type={props.type}
					number={props.pages}
				/>
			);
		}

		if (currentPageNumber > props.pages - 3) {
			for (var i = props.pages - 3; i <= props.pages; i++) {
				buttons.push(
					<PageButtonItem
						isCurrent={i == props.current}
						type={props.type}
						number={i}
					/>
				);
			}
		}

		if (!(currentPageNumber == props.pages)) {
			buttons.push(
				<a
					href={`https://aniranker.com/leaderboard/${props.type}/${
						props.current + 1
					}`}
					className="relative inline-flex items-center rounded-r-md border border-zinc-700 bg-zinc-800 px-2 py-2 text-sm font-medium text-gray-500 hover:bg-zinc-700"
				>
					<span className="sr-only">Previous</span>
					<ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
				</a>
			);
		}

		return buttons;
	}

	function addItemsToRight(amount, currentPageNumber) {
		for (var i = 1; i <= amount; i++) {
			buttons.push(
				<PageButtonItem
					isCurrent={false}
					type={props.type}
					number={currentPageNumber + i}
				/>
			);
		}
	}

	function showLeaderboardTypebutton() {
		if (props.type === "characters") {
			return (
				<>
					<a href="javascript:void(0);">
						<button className="rounded-tl-md rounded-bl-md bg-orange-600 px-2 py-1 font-lato text-sm font-semibold text-white">
							Characters
						</button>
					</a>
					<a href="https://aniranker.com/leaderboard/anime">
						<button className="rounded-tr-md rounded-br-md bg-zinc-600 px-2 py-1 font-lato text-sm font-semibold text-slate-100">
							Anime
						</button>
					</a>
				</>
			);
		} else {
			return (
				<>
					<a href="https://aniranker.com/leaderboard/characters">
						<button className="rounded-tl-md rounded-bl-md bg-zinc-600 px-2 py-1 font-lato text-sm font-semibold text-slate-100">
							Characters
						</button>
					</a>
					<a href="javascript:void(0);">
						<button className="rounded-tr-md rounded-br-md bg-orange-600 px-2 py-1 font-lato text-sm font-semibold text-white">
							Anime
						</button>
					</a>
				</>
			);
		}
	}

	return (
		<>
			<div className="mx-10 my-5 flex items-center justify-between rounded-md bg-zinc-800 px-4 py-3 sm:px-6">
				<div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
					<div className="flex">
						<h1 className="text-xl font-bold text-zinc-100">Leaderboard</h1>
						<span className="my-auto ml-2 font-lato text-sm text-zinc-400">
							(Rank {props.startIndex}-{props.endIndex})
						</span>
						<div className="ml-4">{showLeaderboardTypebutton()}</div>
					</div>
					<div>
						<nav
							className="relative z-0 inline-flex -space-x-px rounded-md shadow-sm"
							aria-label="Pagination"
						>
							{buildItems(props.current)}
						</nav>
					</div>
				</div>
			</div>
		</>
	);
}
