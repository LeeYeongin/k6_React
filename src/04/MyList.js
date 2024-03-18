import { FaHeart } from "react-icons/fa6";
import { useState } from "react"; // 상태(state)변수

export default function MyList({ title, imgUrl, content }) {
    // 지역변수
    let cnt=0;

    // state 변수 : const[변수명, 값을 바꿀 setter] = useState(초기값);
    const [stCnt, setStCnt] = useState(0);

    const handleLike = (t) => {
        console.log('handleLike' + t);
        cnt = cnt+1;
        console.log(`cnt = ${cnt}`)
        setStCnt(stCnt+1);
    }

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
                    <span className="text-xl " 
                        //  매개변수를 전달할때는 콜백함수 형태로 작성
                        onClick={() => {handleLike(title)}}> 
                        <FaHeart className="text-orange-400 hover:text-red-600 hover:cursor-pointer"/>
                    </span>
                    <span className="mx-2">좋아요</span>
                    <span>{stCnt}</span>
                </p>
            </div>
        </div>
    )
}
// useState hook
