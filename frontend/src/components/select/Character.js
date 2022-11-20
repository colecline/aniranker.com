import Router from "next/router";
import Image from "next/image";

export default function Character(props) {
	return (
		<>
			{/* Desktop */}
			<div className="hidden md:flex">
				<a href="javascript:void(0);">
					<div className="rounded-lg border-8 border-zinc-600 transition delay-150 ease-in-out hover:scale-105 hover:border-green-500">
						<div
							style={{ position: "relative" }}
							className="object-fit h-[350px] w-[225px] shadow-inner"
						>
							<Image
								src={props.src}
								alt={props.name}
								onClick={props.imageClick}
								layout="fill"
								priority={true}
							/>
						</div>

						<div className="character-container max-w-241 bg-zinc-800 pt-2  pb-4 text-center text-white">
							<h3 className="mx-auto font-semibold">{props.name}</h3>
							<p className="mx-auto text-xs">{props.anime}</p>
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
								alt={props.name}
								onClick={props.imageClick}
								layout="fill"
								priority={true}
							/>
						</div>

						<div className="character-container-mobile flex max-w-241 items-center justify-center bg-gray-800 px-1  pt-2 pb-4 text-center text-white">
							<div>
								<h3 className="mx-auto text-sm font-semibold">{props.name}</h3>
								<p className="mx-auto text-xs">{props.anime}</p>
							</div>
						</div>
					</div>
				</a>
			</div>
		</>
	);
}
