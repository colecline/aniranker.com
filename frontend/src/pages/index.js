export default function Home() {
    
    return (
        <>

        <div className="bg-white rounded-lg shadow-lg p-10 mx-10 mb-8">
            <div className="flex justify-center mb-3 space-x-3">
                <img src="/images/characters/289337.jpg" className="hidden lg:flex h-80 border-4 border-gray-400" />
                <img src="/images/characters/292046.jpg" className="md:h-80 h-60 border-4 border-gray-400" />
                <img src="/images/characters/352557.jpg" className="md:h-80 h-60 border-4 border-gray-400" />
                <img src="/images/characters/312836.jpg" className="hidden lg:flex h-80 border-4 border-gray-400" />
            </div>
            <div className="text-center">
                <h2 className="text-2xl font-bold">Rank Anime Characters</h2>
                <p className="text-md text-gray-500 mb-2">Rank and choose the best anime characters.</p>
                <button className="bg-indigo-500 text-white p-2 rounded-md font-semibold border-b-4 border-indigo-700 "><a href="/select/characters">Rank Characters</a></button>                
            </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-10 mx-10">
            <div className="flex justify-center mb-3 space-x-3">
                <img src="/images/anime/103275.jpg" className="hidden lg:flex h-80 border-4 border-gray-400" />
                <img src="/images/anime/17405.jpg" className="md:h-80 h-60 border-4 border-gray-400" />
                <img src="/images/anime/40451.jpg" className="md:h-80 h-60 border-4 border-gray-400" />
                <img src="/images/anime/111943.jpg" className="hidden lg:flex h-80 border-4 border-gray-400" />
            </div>
            <div className="text-center">
                <h2 className="text-2xl font-bold">Rank Anime Shows</h2>
                <p className="text-md text-gray-500 mb-2">Rank and choose the best anime shows.</p>
                <button className="bg-indigo-500 text-white p-2 rounded-md font-semibold border-b-4 border-indigo-700 "><a href="/select/characters">Rank Anime</a></button>                
            </div>
        </div>

        </>
    )
}