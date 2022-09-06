export default function PageButtonItem(props) {
    let url = `http://aniranker.com/leaderboard/${props.type}/${props.number}`
    
    if (props.isCurrent == true) {
        return (
            <>
            <a href={url} className="font-lato z-10 bg-indigo-50 rounded-tl-md rounded-bl-md border-indigo-500 text-indigo-600 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                {props.number}
            </a>
            </>
        )
    } else {
        return (
            <>
            <a href={url} className="font-lato bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                {props.number}
            </a>
            </>
        )
    }
}