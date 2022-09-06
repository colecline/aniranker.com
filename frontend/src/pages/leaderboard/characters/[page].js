import Head from "next/head";

import TableElement from "../../../components/leaderboard/TableElement";
import PageButton from "../../../components/leaderboard/PageButton";
import PageButtonTop from "../../../components/leaderboard/PageButtonTop";

function CharactersLeaderboardPage(data) {

    return (
        <>
        <Head>
            <title>Anime Characters Leaderboard - Page {data.meta.current_page} | AniRanker</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />

            <meta name="description" content="View leaderboard for anime characters on AniRanker." />
            <meta name="keywords" content="aniranker, anime ranker, anime character ranker, anime" />
            <meta name="robots" content="index, follow" />
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="author" content="Cole Cline" />
        </Head>

        <div className="mx-10 mb-5 bg-white py-2 rounded-md shadow-lg">
            <PageButtonTop 
            startIndex={(parseInt(data.next.page - 2) * 25) + 1 + 0} 
            endIndex={(parseInt(data.next.page - 2) * 25) + 1 + 24} 
            numberOfChars={data.meta.total_count} 
            pages={data.meta.page_count} 
            type="characters" 
            current={data.meta.current_page} />
        </div>
        <div className="bg-white mx-10 mb-20 rounded-md shadow-lg">

            <div className="flex justify-center">
                <table className="table-fixed w-full text-center">
                    <thead className="border-b-2 border-gray-200">
                        <tr>
                            <th className="py-3">Rank</th>
                            <th className="py-3">Character</th>
                            <th className="py-3">Anime</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.result.map((item, i) => (
                            <TableElement 
                            name={item.name} 
                            anime={item.anime} 
                            src={`/images/characters/${item.picture_id}.jpg`} 
                            rank={(parseInt(data.next.page - 2) * 25) + 1 + i}
                            rating={item.rating} 
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
            type="characters" 
            current={data.meta.current_page} />
        </div>
        </>
    )
}

CharactersLeaderboardPage.getInitialProps = async (ctx) => {
    const { page } = ctx.query;

    const res = await fetch(`http://api.aniranker.com/leaderboard?type=characters&page=${page}`);
    const json = await res.json();

    return json;

}

export default CharactersLeaderboardPage;