import TableElement from "../../../components/leaderboard/TableElement";
import PageButton from "../../../components/leaderboard/PageButton";
import PageButtonTop from "../../../components/leaderboard/PageButtonTop";

async function getData() {
	const res = await fetch(
		`https://api.aniranker.com/leaderboard?type=anime&page=1`
	);
	return res.json();
}

export default async function AnimeLeaderboardPage() {
	const data = await getData();

	return (
		<>
			<PageButtonTop
				startIndex={parseInt(data.next.page - 2) * 25 + 1 + 0}
				endIndex={parseInt(data.next.page - 2) * 25 + 1 + 24}
				numberOfChars={data.meta.total_count}
				pages={data.meta.page_count}
				type="anime"
				current={data.meta.current_page}
			/>
			<div className="mx-10 mb-20 rounded-md bg-zinc-800 shadow-lg">
				<div className="flex justify-center">
					<table className="w-full table-fixed text-center">
						<thead className="border-b-2 border-zinc-900 text-zinc-300">
							<tr>
								<th className="py-3">Rating</th>
								<th className="py-3">Anime</th>
							</tr>
						</thead>
						<tbody>
							{data.result.map((item, i) => (
								<TableElement
									name={item.title}
									src={`/images/anime/${item.picture_id}.jpg`}
									rank={parseInt(data.next.page - 2) * 25 + 1 + i}
									rating={item.rating}
									wins={item.wins}
									bg_color={i % 2 == 0 ? "bg-zinc-800" : "bg-zinc-700"}
								/>
							))}
						</tbody>
					</table>
				</div>
				<PageButton
					startIndex={parseInt(data.next.page - 2) * 25 + 1 + 0}
					endIndex={parseInt(data.next.page - 2) * 25 + 1 + 24}
					numberOfChars={data.meta.total_count}
					pages={data.meta.page_count}
					type="anime"
					current={data.meta.current_page}
				/>
			</div>
		</>
	);
}
