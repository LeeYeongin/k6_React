export default function MyList({ title, imgUrl, content }) {
    return (
        <div className="w-full flex
                        border border-l-slate-300 rounded
                        hover:bg-gray-100">
            <div className="w-1/4 max-w-40">
                <img className='rounded' src={imgUrl} alt={title} />
            </div>
            <div className="px-7 py-3 w-3/4 flex flex-col justify-between">
                <div>
                    <h1 className="font-bold text-2xl text-gray-700">{title}</h1>
                    <p className="w-full text-gray-600">
                        {content}
                    </p>
                </div>
                <p className="w-full mt-5
                              flex justify-end items-center
                              font-bold">
                    <span className="text-xl">🧡</span>
                    <span className="mx-2">좋아요</span>
                    <span>0</span>
                </p>
            </div>
        </div>
    )
}
