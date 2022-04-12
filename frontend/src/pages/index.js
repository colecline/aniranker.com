import Selection from "../components/Selection";

export default function Home() {
    
    return (
        <>
        <div className="text-center mb-5 bg-white py-4 rounded-lg shadow-md mx-10">
            <h1 className="text-3xl font-bold">aniranker</h1>
            <p className="text-gray-600 text-sm">Rank anime-related stuff with two options. The better one wins.</p>
        </div>

        <div className="flex bg-white rounded-lg shadow-md p-10 mx-10 justify-center">
            <button className="bg-red-400 p-2 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-700 duration-300 mr-4">
                <a className="text-white text-md font-semibold" href="leaderboard">Leaderboard</a>
            </button>
            <button className="bg-indigo-500 text-white p-2 rounded-md font-semibold"><a href="/select/characters">Rank Anime Characters</a></button>
            <button className="bg-green-600 text-white p-2 rounded-md font-semibold ml-4"><a href="/select/anime">Rank Some Anime</a></button>
        </div>

        </>
    )
}