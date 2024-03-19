import BoxOfficeData from './BoxOffice.json';
import BoxOfficeInfo from './BoxOfficeInfo';
import BoxOfficeTbody from './BoxOfficeTbody';
import BoxOfficeThead from './BoxOfficeThead';
import { useState } from "react"; // 상태(state)변수


export default function BoxOfficeTb() {

    // state 변수
    const [info, setInfo] = useState();

    // 영화 목록 json 가져오기
    const boxList = BoxOfficeData.boxOfficeResult.dailyBoxOfficeList;

    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <table className="w-4/5 border">
                <BoxOfficeThead/>
                {/* state 변수, 함수도 전달하여 사용 가능 */}
                <BoxOfficeTbody boxList = {boxList} setInfo = {setInfo}/> 
            </table>
            <BoxOfficeInfo info = {info}/>
        </div>
    )
}
