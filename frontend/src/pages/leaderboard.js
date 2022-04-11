import Image from "next/image";
import { useState, useEffect } from "react";
import PageButton from "../components/leaderboard/PageButton";
import PageButtonTop from "../components/leaderboard/PageButtonTop";
import TableElement from "../components/leaderboard/TableElement";

export default function Leaderboard() {
    const [data, setData] = useState(null);
    const [nextData, setNextData] = useState(null);
    const [meta, setMeta] = useState(null);

    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:3001/leaderboard?page=1`)
            .then((res) => res.json())
            .then((data) => {
                setData(data.result);
                setNextData(data.next);
                setMeta(data.meta);
                setLoading(false);
            })
    }, []);

    if (isLoading) {
        return <p>Loading...</p>
    }
    if (!data) {
        return <p>No Profile Data</p>
    }

    return (
        <>
        <div className="text-center mb-5 bg-white py-4 rounded-lg shadow-md mx-12">
            <h1 className="text-3xl font-bold">Leaderboard</h1>
            <p className="text-gray-600 text-sm">Last updated at 5:00PM EST on April 9th, 2022.</p>
            <div className="flex justify-center mt-3">
                <button className="bg-indigo-500 p-2 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-700 duration-300">
                    <a className="text-white text-md font-semibold" href="/">Back to Select</a>
                </button>
            </div>
        </div>
        <div className="bg-white mx-12 mb-20 rounded-lg shadow-lg">
            <PageButtonTop startIndex={1} endIndex={25} numberOfChars={meta.total_count} pages={meta.page_count} current={meta.current_page}/>
            <div className="flex justify-center">
                <table className="table-fixed w-full text-center">
                    <thead className="border-b-2 border-gray-200">
                        <tr>
                            <th>Rank</th>
                            <th>Character</th>
                            <th>Anime</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, i) => (
                            <TableElement 
                            name={item.name} 
                            anime={item.anime} 
                            src={`/images/characters/${item.picture_id}.jpg`} 
                            rank={i+1}
                            rating={item.rating} 
                            bg_color={i % 2 == 0 ? "bg-gray-100" : "bg-gray-200"} />
                        ))}
                    </tbody>
                </table>
            </div>
            <PageButton startIndex={1} endIndex={25} numberOfChars={meta.total_count} pages={meta.page_count} current={meta.current_page}/>
        </div>
        </>
    )
}