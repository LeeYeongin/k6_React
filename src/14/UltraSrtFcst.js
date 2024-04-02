import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import TailSelect from "../UI/TailSelect";
import getcode from "./getcode.json";

export default function UltraSrtFcst() {
    const dt = useParams().dt;
    const area = useParams().area;
    const x = useParams().x;
    const y = useParams().y;
    const gubun = '초단기예보';
    const ops = getcode.filter(item => item.예보구분 === gubun).map(item => `${item.항목명}(${item.항목값})`);

    // fetch data state 변수로 저장
    const [tdata, setTData] = useState([]);

    // 화면에 표시되는 테이블 tr 지정
    const [trtags, setTrtag] = useState([]);
    const cRef = useRef();

    // select 박스 선택값
    const [selItem, setSelItem] = useState();
    const [selName, setSelName] = useState();
    const [selUnit, setSelUnit] = useState();

    // 데이터 가져오기
    useEffect(() => {
        // 초단기
        let url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?`;
        url = url + `serviceKey=${process.env.REACT_APP_APIKEY}`;
        url = url + `&pageNo=1&numOfRows=1000&dataType=json&base_date=${dt}&base_time=0630&nx=${x}&ny=${y}`;

        getData(url);
    }, [])

    // selitem가 저장되었을때
    useEffect(() => {
        // console.log(tdata);

        let tmp = tdata.filter(item =>
            item.category === selItem
        );

        // setSelUnit(getcode.filter(item => item.항목값 === selItem));
        // setSelUnit(getcode.filter(item => item.항목값 === selItem && item.예보구분===gubun)[0].단위);

        tmp = tmp.map((item, i) =>
            <tr className="bg-white border-b hover:bg-gray-100 text-center" key={item.fcstDate + item.fcstTime}>
                <td className="px-6 py-3">
                    {selName}
                </td>
                <td className="px-6 py-3">
                    {`${item.fcstDate.substring(0, 4)}-${item.fcstDate.substring(4, 6)}-${item.fcstDate.substring(6, 8)}`}
                </td>
                <td className="px-6 py-3">
                    {`${item.fcstTime.substring(0, 2)} : ${item.fcstTime.substring(2, 4)}`}
                </td>
                <td className="px-6 py-3">
                    {item.fcstValue}
                </td>
            </tr>
        );

        setTrtag(tmp);

    }, [selItem])

    // fetch 함수 (비동기)
    const getData = async (url) => {
        const res = await fetch(url); // fetch가 끝나야 아래 코드 실행
        const data = await res.json();

        // console.log(data.response.body.items.item)
        setTData(data.response.body.items.item);
    }

    // select 박스 항목 선택
    const handleItem = () => {
        if(cRef.current.value === ''){
            alert('항목을 선택하세요.');
            cRef.current.focus();
            setTrtag([]);
            return;
        }

        console.log(cRef.current.value);
        
        setSelName(cRef.current.value.split('(')[0]);
        setSelItem(cRef.current.value.split('(')[1].replace(')', ''));
    }

    return (
        <div className="w-10/12 h-full flex flex-col justify-start items-start">
            <div className="w-full justify-start grid grid-cols-1 md:grid-cols-2 p-2 gap-2">
                <div className="font-bold">
                    {`${area} ${gubun}(${dt.substring(0,4)}/${dt.substring(4,6)}/${dt.substring(6)})`}
                </div>
                <div className="w-3/5">
                    <TailSelect opDefault="선택" selRef={cRef}
                        handleSel={handleItem} ops={ops} />
                </div>
            </div>
            <div className="w-full relative overflow-x-auto shadow-md sm:rounded-lg mb-4">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-center text-gray-700 uppercase bg-gray-100">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                항목명
                            </th>
                            <th scope="col" className="px-6 py-3">
                                예측일자
                            </th>
                            <th scope="col" className="px-6 py-3">
                                예측시간
                            </th>
                            <th scope="col" className="px-6 py-3">
                                예보값
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {trtags}
                    </tbody>
                </table>
            </div>

        </div>
    )
}
