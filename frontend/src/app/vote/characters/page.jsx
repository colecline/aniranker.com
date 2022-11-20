"use client";

import Selection from "../../../components/Selection";

export default function CharactersPage() {
	return (
		<>
			<div className="mx-10 mt-5 rounded-md py-6 text-center">
				<h1 className="text-4xl font-extrabold text-zinc-100">
					Choose a Character
				</h1>
				<p className="text-zinc-400">
					Which anime character do you think is better?
				</p>
			</div>

			<Selection type="characters" />

			<div className="text-center">
				<a href="https://aniranker.com/vote/characters">
					<button
						className="mb-1 rounded-lg bg-orange-600 py-2 px-8 font-bold uppercase text-white"
						onClick={() => getSelection()}
					>
						Skip
					</button>
				</a>
				<div>
					<span className="text-zinc-400">
						Don't know one of the characters?
					</span>
				</div>
			</div>
		</>
	);
}
