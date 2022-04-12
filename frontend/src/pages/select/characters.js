import Selection from "../../components/Selection";

export default function SelectCharacters() {
    return (
        <>
        <div className="text-center mb-5 bg-white py-4 rounded-lg shadow-md mx-10">
            <h1 className="text-3xl font-bold">Select a Character</h1>
            <p className="text-gray-600 text-sm">Click the image of the better anime character to rank them.</p>
            <div className="flex justify-center mt-3">
                <button className="bg-indigo-500 p-2 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-700 duration-300">
                    <a className="text-white text-md font-semibold" href="leaderboard">Leaderboard</a>
                </button>
            </div>
        </div>

        <Selection type="characters" />
        </>
    )
}