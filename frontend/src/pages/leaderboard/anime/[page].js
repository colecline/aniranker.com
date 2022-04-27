import TableElement from "../../../components/leaderboard/TableElement";
import PageButton from "../../../components/leaderboard/PageButton";
import PageButtonTop from "../../../components/leaderboard/PageButtonTop";

function AnimeLeaderboardPage(data) {

    return (
        <>
        <div className="mx-12 mb-5 bg-white py-2 rounded-lg shadow-lg">
            <PageButtonTop 
            startIndex={(parseInt(data.next.page - 2) * 25) + 1 + 0} 
            endIndex={(parseInt(data.next.page - 2) * 25) + 1 + 24} 
            numberOfChars={data.meta.total_count} 
            pages={data.meta.page_count} 
            type="anime"
            current={data.meta.current_page} />
        </div>
        <div className="bg-white mx-12 mb-20 rounded-lg shadow-lg">

            <div className="flex justify-center">
                <table className="table-fixed w-full text-center">
                    <thead className="border-b-2 border-gray-200">
                        <tr>
                            <th>Rank</th>
                            <th>Anime</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.result.map((item, i) => (
                            <TableElement 
                            name={item.title} 
                            src={`/images/anime/${item.picture_id}.jpg`} 
                            rank={(parseInt(data.next.page - 2) * 25) + 1 + i}
                            rating={item.rating}
                            type="anime" 
                            bg_color={i % 2 == 0 ? "bg-gray-100" : "bg-gray-200"} />
                        ))}
                    </tbody>
                </table>
            </div>
            <PageButton 
            startIndex={(parseInt(data.next.page - 2) * 25) + 1 + 0} 
            endIndex={(parseInt(data.next.page - 2) * 25) + 1 + 24} 
            numberOfChars={data.meta.total_count} 
            pages={data.meta.page_count}
            type="anime" 
            current={data.meta.current_page} />
        </div>
        </>
    )
}

AnimeLeaderboardPage.getInitialProps = async (ctx) => {
    const { page } = ctx.query;

    const res = await fetch(`http://api.aniranker.com/leaderboard?type=anime&page=${page}`);
    const json = await res.json();

    return json;

}

export default AnimeLeaderboardPage;