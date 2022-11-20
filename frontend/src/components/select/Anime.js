import Router from "next/router";
import Image from "next/image";

export default function Anime(props) {
	return (
		<>
			{/* Desktop */}
			<div className="hidden md:flex">
				<a href="javascript:void(0);">
					<div className="rounded-lg border-8 border-gray-500 transition delay-150 ease-in-out hover:scale-105 hover:border-green-500">
						<div
							style={{ position: "relative" }}
							className="mx-auto h-80 w-56 items-center object-contain"
						>
							<Image
								src={props.src}
								alt={props.title}
								onClick={props.imageClick}
								layout="fill"
								eager
							/>
						</div>

						<div className="character-container flex max-w-241 items-center justify-center bg-zinc-800 px-2 pt-2 pb-4 text-center text-white">
							<div>
								<h3 className="mx-auto text-sm font-semibold">{props.title}</h3>
							</div>
						</div>
					</div>
				</a>
			</div>

			{/* Mobile */}
			<div className="md:hidden">
				<a href="javascript:void(0);">
					<div className="rounded-lg border-8 border-gray-500 transition delay-150 ease-in-out hover:scale-105 hover:border-green-500">
						<div
							style={{ position: "relative" }}
							className="object-fit h-[225px] w-[150px] shadow-inner"
						>
							<Image
								src={props.src}
								alt={props.title}
								onClick={props.imageClick}
								layout="fill"
								priority={true}
							/>
						</div>

						<div className="character-container-mobile flex max-w-241 items-center justify-center bg-zinc-800 px-1  pt-2 pb-4 text-center text-white">
							<div>
								<h3 className="mx-auto text-sm font-semibold">{props.title}</h3>
							</div>
						</div>
					</div>
				</a>
			</div>
		</>
	);
}
