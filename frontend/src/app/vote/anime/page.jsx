"use client";

import Selection from "../../../components/Selection";

export default function AnimePage() {
	return (
		<>
			<div className="mt-5 py-6 text-center">
				<h1 className="text-4xl font-extrabold text-zinc-100">
					Choose an Anime
				</h1>
				<p className="text-zinc-400">
					Which anime show do you think is better?
				</p>
			</div>

			<Selection type="anime" />

			<div className="text-center">
				<a href="https://aniranker.com/vote/anime">
					<button
						className="mb-1 rounded-lg bg-orange-600 py-2 px-8 font-bold uppercase text-white"
						onClick={() => getSelection()}
					>
						Skip
					</button>
				</a>
				<div>
					<span className="text-zinc-400">Don't know one of the shows?</span>
				</div>
			</div>
		</>
	);
}
