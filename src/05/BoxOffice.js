import BoxOfficeData from './BoxOffice.json'
import { useState, useEffect, useRef } from "react"; // 상태(state)변수
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { CgLoadbar } from "react-icons/cg";
import TailInput from "../UI/TailInput";

export default function BoxOffice() {

    const [dataList, setDataList] = useState();
    const [movieList, setMovieList] = useState([]);
    const [info, setInfo] = useState();
    const boxRef = useRef();     // Ref 변수


    const handleClick = (i) => {
        // console.log(i);

        // 할당연산자로 state 변수 변경 불가 -> 업데이트함수 변경
        // info = i;
        setInfo(i)
    }

    useEffect(()=>{
        if (!dataList) // 초기화 또는 조건을 통해 undefined error 제거
            return;

        const tmp = dataList.map(item =>
            <tr key={item.movieCd} className='h-10 text-center hover:bg-slate-200 hover:font-bold hover:cursor-pointer' 
                                    onClick={() => {handleClick(item)}}>
                <td className='font-bold'>{item.rank}</td>
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

        setMovieList(tmp);
    }, [dataList])

    // boxOffice 데이터 fetch
    const getData = (dt) => {
        let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`;
        url = url + `key=${process.env.REACT_APP_MV_API}&targetDt=${dt}`; // 선택한 날짜의 data를 fetch
        // console.log(url);

        fetch(url)
        .then(resp => resp.json())
        .then(data => setDataList(data.boxOfficeResult.dailyBoxOfficeList))
        .then(err => console.log(err));
    }

    const handleSelDate = () => {
        // console.log(boxRef.current.value.replaceAll('-', '')); // json 요청 형식에 맞춰 날짜의 '-'제거
        getData(boxRef.current.value.replaceAll('-', '')); // 날짜별 데이터를 가져오기 위해 만든 함수
    }




    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <div className='w-4/5 flex justify-end items-center
                            m-1'>
                <span className='mx-2 font-bold'>날짜 선택:</span> 
                <div className='flex'>
                    <TailInput type="date"
                        inputRef={boxRef}
                        handleChange = {handleSelDate}
                        ph="" />
                </div>
            </div>
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
            <div className='w-4/5 h-16
                            flex justify-center items-center
                            text-bold text-center 
                            bg-slate-800 text-white'>
                {info === undefined ? 
                    boxRef.current === undefined ? '날짜를 선택하세요.':'영화를 선택하세요.'
                 : `[${info.movieCd}] ${info.movieNm} -
                    개봉일자 ${info.openDt} -
                    총 누적 관객 수는 ${parseInt(info.audiAcc).toLocaleString()}명 입니다.`}
            </div>
        </div>
    )
}
