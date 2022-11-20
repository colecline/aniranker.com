import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
	return (
		<div className="pt-20 text-zinc-100">
			<div className="lg:grid lg:grid-cols-2">
				<div className="mx-auto my-auto max-w-md">
					<h1 className="text-4xl font-extrabold sm:text-6xl">
						Unleash your unnecessary
					</h1>
					<h1 className="text-4xl font-extrabold text-orange-600 sm:text-6xl">
						anime opinions
					</h1>
					<p className="mt-3 text-xl text-zinc-400 sm:text-2xl">
						Rank your favorite anime characters & shows. We are basically a
						HotOrNot.com replica, but for weebs. (づ｡◕‿‿◕｡)づ
					</p>

					{/* Hero Left Button Section */}
					<div className="mt-4 flex space-x-3">
						<button className="rounded bg-orange-600 px-6 py-3 text-lg font-semibold text-white">
							<a href="https://aniranker.com/vote/characters">
								Rank Characters
							</a>
						</button>

						<button className="rounded bg-zinc-600 px-6 py-3 text-lg font-semibold text-white">
							<a href="https://aniranker.com/vote/anime">Rank Shows</a>
						</button>
					</div>

					<p className="mt-2 text-sm text-slate-500">
						Still working on adding a few cool things!
					</p>
				</div>
				<div className="mx-auto my-auto max-w-lg px-4 pt-12 sm:px-0 lg:mt-0">
					<div className="flex space-x-4 pr-4">
						<Image
							className="w-1/2 rounded-xl md:w-1/2"
							src="/chainsaw-man.jpeg"
							width={1000}
							height={1477}
						/>
						<Image
							className="w-1/2 rounded-xl md:w-1/2"
							src="/jk.png"
							width={1000}
							height={1477}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
