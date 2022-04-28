import Head from "next/head";
import Image from "next/image";

export default function Home() {
    
    return (
        <>

        <Head>
            <title>AniRanker | Rank Anime Characters and Shows</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />

            <meta name="description" content="Rank anime characters or anime shows on AniRanker. Compare different characters, anime and view their ranking on the leaderboard." />
            <meta name="keywords" content="aniranker, anime ranker, anime character ranker, anime" />
            <meta name="robots" content="index, follow" />
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="author" content="Cole Cline" />
        </Head>

        <div className="bg-white rounded-lg shadow-lg p-10 mx-10 mb-8">
            <div className="flex justify-center mb-3 space-x-3">
                
                <div style={{position: 'relative'}} className="hidden lg:flex h-80 w-52 border-4 border-gray-400">
                    <Image src="/images/characters/289337.jpg" alt="Anime Character #1" layout="fill" />
                </div>

                <div style={{position: 'relative'}} className="md:h-80 h-60 md:w-52 w-36 border-4 border-gray-400">
                    <Image src="/images/characters/292046.jpg" alt="Anime Character #2" layout="fill" />
                </div>

                <div style={{position: 'relative'}} className="md:h-80 h-60 md:w-52 w-36 border-4 border-gray-400">
                    <Image src="/images/characters/352557.jpg" alt="Anime Character #3" layout="fill" />
                </div>

                <div style={{position: 'relative'}} className="hidden lg:flex h-80 w-52 border-4 border-gray-400">
                    <Image src="/images/characters/312836.jpg" alt="Anime Character #4" layout="fill" />
                </div>

            </div>
            <div className="text-center">
                <h2 className="text-2xl font-bold">Rank Anime Characters</h2>
                <p className="text-md text-gray-500 mb-2">Rank and choose the best anime characters.</p>
                <a href="/select/characters">
                    <button className="bg-indigo-500 text-white p-2 rounded-md font-semibold border-b-4 border-indigo-700">
                        Rank Anime Characters
                    </button> 
                </a>        
            </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-10 mx-10">
            <div className="flex justify-center mb-3 space-x-3">

                <div style={{position: 'relative'}} className="hidden lg:flex h-80 w-52 border-4 border-gray-400">
                    <Image src="/images/anime/103275.jpg" alt="Anime Show #1" layout="fill" />
                </div>

                <div style={{position: 'relative'}} className="md:h-80 h-60 md:w-52 w-36 border-4 border-gray-400">
                    <Image src="/images/anime/17405.jpg" alt="Anime Show #2" layout="fill" />
                </div>

                <div style={{position: 'relative'}} className="md:h-80 h-60 md:w-52 w-36 border-4 border-gray-400">
                    <Image src="/images/anime/40451.jpg" alt="Anime Show #3" layout="fill" />
                </div>

                <div style={{position: 'relative'}} className="hidden lg:flex h-80 w-52 border-4 border-gray-400">
                    <Image src="/images/anime/111943.jpg" alt="Anime Show #4" layout="fill" />
                </div>

            </div>
            <div className="text-center">
                <h2 className="text-2xl font-bold">Rank Anime Shows</h2>
                <p className="text-md text-gray-500 mb-2">Rank and choose the best anime shows.</p>             
                <a href="/select/anime">
                    <button className="bg-indigo-500 text-white p-2 rounded-md font-semibold border-b-4 border-indigo-700">
                        Rank Anime Shows
                    </button> 
                </a>
            </div>
        </div>

        </>
    )
}