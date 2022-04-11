import { useEffect, useState } from "react";
import AnimeCharacter from "./AnimeCharacter";

export default function Selection() {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch("http://localhost:3001/selection")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
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
        <div className="flex justify-center bg-white rounded-lg shadow-lg mx-10 py-10">

            <div className="pl-4">
                <AnimeCharacter 
                src={`/images/characters/${data[0].picture_id}.jpg`} 
                name={data[0].name} 
                anime={data[0].anime} 
                url={data[0].url} 
                otherUrl={data[1].url} />
            </div>

            <div className="my-auto md:mx-10 mx-5">
                <span className="text-2xl font-bold">vs</span>
            </div>

            <div className="pr-4">
                <AnimeCharacter 
                src={`/images/characters/${data[1].picture_id}.jpg`} 
                name={data[1].name} 
                anime={data[1].anime} 
                url={data[1].url} 
                otherUrl={data[0].url} />
            </div>

        </div>
        </>
    )

    // return (
    //     <>
    //     <div className="bg-white flex justify-center space-x-8 mx-12 py-10 rounded-xl shadow-md">
    //         <div>
    //             <AnimeCharacter src={`/images/${data[0].picture_id}.jpg`} name={data[0].name} anime={data[0].anime} url={data[0].url} otherUrl={data[1].url} />
    //         </div>
    //         <div className="my-auto">
    //             <h1 className="text-2xl font-bold">vs</h1>
    //         </div>
    //         <div>
    //             <AnimeCharacter src={`/images/${data[1].picture_id}.jpg`} name={data[1].name} anime={data[1].anime} url={data[1].url} otherUrl={data[0].url} />
    //         </div>
    //     </div>
    //     </>
    // )
}