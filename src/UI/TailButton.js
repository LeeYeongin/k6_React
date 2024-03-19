export default function TailButton({ caption, color, handleClick }) {
    const colorObj = {
        'blue': 'bg-blue-800',
        'red': 'bg-red-800',
        'oragne': 'bg-orange-800',
    }
    const bColor = `px-4 py-2 rounded-md m-2 bg-${color}-800 text-white hover:bg-sky-950`;
    return (
        <button className={bColor}
            onClick={handleClick}>
            {caption}
        </button>
    )
}
