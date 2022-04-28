import Head from "next/head";
import Selection from "../../components/Selection";
import Link from "next/link";


export default function SelectCharacters() {
    return (
        <>

        <Head>
            <title>Rank Characters | AniRanker.com</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />

            <meta name="description" content="Rank anime characters on AniRanker. Compare different characters and view their ranking on the leaderboard." />
            <meta name="keywords" content="aniranker, anime ranker, anime character ranker, anime" />
            <meta name="robots" content="index, follow" />
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="author" content="Cole Cline" />
        </Head>

        <div className="text-center mb-5 bg-white py-4 rounded-lg shadow-md mx-10">
            <h1 className="text-3xl font-bold">Select a Character</h1>
            <p className="text-gray-600 text-sm">Click the image of the better anime character to rank them.</p>
            <div className="flex justify-center mt-3">
            <a href="https://aniranker.com/leaderboard/characters">
                <button className="bg-indigo-500 p-2 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-700 duration-300 text-white text-md font-semibold">
                    Character Leaderboard
                </button>
            </a>
                
            </div>
        </div>

        <Selection type="characters" />

        <div className="text-center bg-white rounded-lg shadow-lg mx-10 py-5">
            <a href="http://aniranker.com/leaderboard/characters">
                <button className="bg-gray-500 text-white uppercase font-bold py-2 px-5 rounded-lg shadow-lg mb-1" onClick={() => getSelection()}>
                    Skip
                </button>
            </a>
            <div>
                <span className="text-xs text-gray-600 font-semibold">Don't know one of the options?</span>
            </div>
        </div>
        </>
    )
}