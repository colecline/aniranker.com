"use client";

export default function Header() {
	return (
		<nav className="bg-black text-zinc-100">
			<div className="mx-auto flex max-w-7xl justify-between py-4 px-4">
				<div className="flex space-x-8">
					<div className="space-x-2">
						<a href="https://aniranker.com/" className="text-xl font-semibold">
							aniranker
						</a>
					</div>
					<div className="my-auto flex space-x-6 rounded-full pt-0.5 text-xs font-semibold uppercase">
						<a
							href="https://aniranker.com/vote/characters"
							className="rounded-full bg-zinc-800 px-3 py-1"
						>
							Characters
						</a>
						<a
							href="https://aniranker.com/vote/anime"
							className="rounded-full bg-zinc-800 px-3 py-1"
						>
							Anime
						</a>
						<a
							href="https://aniranker.com/leaderboard/characters"
							className="rounded-full bg-zinc-800 px-3 py-1"
						>
							Leaderboard
						</a>
					</div>
				</div>
				<div>{/* Right Side */}</div>
			</div>
		</nav>
	);
}
