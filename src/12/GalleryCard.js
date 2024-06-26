import { useState } from "react";
export default function GalleryCard({ imgUrl, title, ptitle, ktag }) {
    const [isHovered, setIsHovered] = useState(false);

    if (ktag !== '') {
        // 키워드 나누기
        if (ktag.includes(',')) { // 키워드가 여러개일때
            ktag = ktag.split(',').map(item =>
                <span className="inline-block bg-gray-200 rounded-full 
                            px-3 py-1 text-sm font-semibold 
                            text-gray-700 mr-2 mb-2"
                    key={item}>
                    {item}
                </span>
            );
        } else { // 키워드가 하나일때
            ktag = <span className="inline-block bg-gray-200 rounded-full 
                                px-3 py-1 text-sm font-semibold 
                                text-gray-700 mr-2 mb-2"
            >
                {ktag}
            </span>
        }
    }

    return (
        <div className="max-w-sm rounded overflow-auto shadow-lg
                        border mb-2">
            <img className="w-full"
                src={imgUrl}
                alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                    {title}
                </div>
                {/* <p className="text-gray-700 text-base truncate hover:truncate-none"> */}
                <p  className={`text-gray-700 text-base ${isHovered ? 'truncate-none' : 'truncate'}`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                    {ptitle}
                </p>
            </div>
            <div className="px-6 pt-1 pb-2">
                {ktag}
            </div>
        </div>
    )
}
