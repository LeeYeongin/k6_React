export default function TailBall({n}) {
    const bcolor = [
        'bg-red-400',
        'bg-orange-400',
        'bg-lime-400',
        'bg-blue-400',
        'bg-purple-400'
    ]

    const ballColor = `w-16 h-16 m-1
                       flex justify-center items-center
                       ${bcolor[parseInt(n / 10)]} text-white font-bold
                       rounded-full`

    return (
        <div className={ballColor}>
            {n}
        </div>
    )
}
