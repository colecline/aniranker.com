import Router from "next/router";

export default function Anime(props) {
    
    const api_url = "http://localhost:3001/selection?type=anime";
    
    async function imageClick() {
        const rbo = new Object();
        rbo.winnerUrl = props.url;
        rbo.loserUrl = props.otherUrl;
        
        const response = await fetch(api_url, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(rbo)
        });

        console.log(response.json());
        return Router.reload(window.location.pathname);
    }
    
    return (
        <>
        <div>
            <a href="javascript:void(0);">
                <div className="transition ease-in-out delay-150 hover:scale-105 border-8 border-gray-500 hover:border-green-500 rounded-lg">
                    <img 
                    src={props.src} 
                    onClick={() => imageClick()}
                    class="object-fit shadow-inner"/>

                    <div className="text-center max-w-241 bg-gray-800  text-white pt-2 pb-4">
                        <h3 className="anime-title font-semibold mx-auto">{props.title}</h3>
                        {/* <p className="anime-title text-xs mx-auto">{props.anime}</p> */}
                    </div>
                </div>
            </a>
        </div>
        </>
    )
}