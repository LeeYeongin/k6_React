import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { CgLoadbar } from "react-icons/cg";

export default function BoxOfficeTbody({ boxList, setInfo }) {
    const handleClick = (i) => {
        console.log(i);
        // 할당연산자로 state 변수 변경 불가 -> 업데이트함수 변경
        // info = i;
        setInfo(i)
    }

    const movieList = boxList.map(item =>
        <tr key={item.movieCd} className='h-10 text-center 
                                        hover:bg-slate-200 hover:font-bold hover:cursor-pointer'
            onClick={() => { handleClick(item) }}>
            <td className='font-bold text-stone-500'>{item.rank}</td>
            <td>{item.movieNm}</td>
            <td className='text-right'>{parseInt(item.salesAmt).toLocaleString()}</td>
            <td className='text-right'>{parseInt(item.audiCnt).toLocaleString()} 명</td>
            <td className='flex justify-center items-center
                                h-10'>
                {item.rankInten < 0 ? <FaArrowDown className="text-blue-600" />
                    : item.rankInten > 0 ? <FaArrowUp className="text-red-600" />
                        : <CgLoadbar />}
                {parseInt(item.rankInten) !== 0 && Math.abs(item.rankInten)}
            </td>
        </tr>
    )

    return (
        <tbody>
            {movieList}
        </tbody>
    )
}
