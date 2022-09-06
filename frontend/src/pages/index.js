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

        <section class="mx-10 text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
                <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center bg-white p-10 rounded-xl shadow-md">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-lato font-extrabold text-gray-900">Rank Anime Characters and Anime Shows</h1>
                    <p class="mb-8 leading-relaxed">Choose between the two to determine the best one out of all of them.</p>
                <div class="flex justify-center">
                    <a href="https://aniranker.com/select/characters">
                    <button class="font-lato inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Rank Characters</button>
                    </a>
                    <a href="https://aniranker.com/select/anime">
                    <button class="font-lato ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Rank Anime</button>
                    </a>
                </div>
            </div>
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 hidden md:block">
                <img class="object-cover object-center rounded" alt="hero" src="asta.png" />
            </div>
            </div>
        </section>

        </>
    )
}