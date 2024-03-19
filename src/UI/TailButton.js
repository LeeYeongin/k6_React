export default function TailButton({ caption, color, handleClick }) {
    const colorObj = {
        'blue': 'bg-blue-700',
        'red': 'bg-red-700',
        'orange': 'bg-orange-700',
        'green': 'bg-green-700',
        'sky': 'bg-sky-700',
    }

    const hoverObj = {
        'blue': 'hover:bg-blue-900',
        'red': 'hover:bg-red-900',
        'orange': 'hover:bg-orange-900',
        'green': 'hover:bg-green-900',
        'sky': 'hover:bg-sky-900',
    }
    
    const bColor = `px-4 py-2 rounded-md m-2 ${colorObj[color]} text-white ${hoverObj[color]}`;
    return (
        <button className={bColor}
            onClick={handleClick}>
            {caption}
        </button>
    )
}
