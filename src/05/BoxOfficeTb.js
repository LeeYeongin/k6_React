import BoxOfficeData from './BoxOffice.json'
import { useState } from "react"; // 상태(state)변수
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { CgLoadbar } from "react-icons/cg";

export default function BoxOfficeTb() {

    const [info, setInfo] = useState();

    const handleClick = (i) => {
        console.log(i);
        setInfo(i)
    }

    const movieList = BoxOfficeData.boxOfficeResult.dailyBoxOfficeList.map(item =>
        <tr key={item.movieCd} className='h-10 text-center hover:bg-slate-200 hover:font-bold hover:cursor-pointer' 
                                onClick={() => {handleClick(item)}}>
            <td>{item.rank}</td>
            <td>{item.movieNm}</td>
            <td className='text-right'>{parseInt(item.salesAmt).toLocaleString()}</td>
            <td className='text-right'>{parseInt(item.audiCnt).toLocaleString()} 명</td>
            <td className='flex justify-center items-center'>
                        {item.rankInten < 0 ? <FaArrowDown className="text-blue-600" />
                        : item.rankInten > 0 ? <FaArrowUp className="text-red-600" />
                        : <CgLoadbar/>}
                        {parseInt(item.rankInten) !== 0 && Math.abs(item.rankInten)}
            </td>
        </tr>
    )

    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <table className="w-4/5 border">
                <thead>
                    <tr className='h-10
                                    text-center 
                                    bg-slate-800 text-white'>
                        <th className='w-14 px-2'>순위</th>
                        <th>영화명</th>
                        <th className='w-20'>매출액</th>
                        <th className='w-1/5'>관객수</th>
                        <th className='w-20'>증감율</th>
                    </tr>
                </thead>
                <tbody>
                    {movieList}
                </tbody>
            </table>

            <div className='w-4/5
                            flex justify-center items-center
                            text-bold text-center 
                            bg-slate-800 text-white'>
                {info == undefined ? '영화를 선택하세요.'
                 : `[${info.movieCd}] ${info.movieNm} -
                    개봉일자 ${info.openDt} -
                    총 누적 관객 수는 ${parseInt(info.audiAcc).toLocaleString()}명 입니다.`}
            </div>
        </div>
    )
}
