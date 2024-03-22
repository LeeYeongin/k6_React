import { useState, useEffect } from "react";
import TrafficNav from "./TrafficNav";
import TrafficDeatil from "./TrafficDeatil";

export default function TrafficMain() {
  const [tdata, setTdata] = useState(); // 전체 fetch 데이터(17개 배열)
  const [c1, setC1] = useState(); // 대분류
  const [selC1, setSelC1] = useState(); // 선택된 대분류

  const [c2, setC2] = useState(); // 중분류(중복제거)
  const [selC2, setSelC2] = useState(); // 선택된 중분류

  const [detail, setDetail] = useState(); // 상세정보
  const [info, setInfo] = useState(); // 상세정보

  const getDataFetch = (url) => {
    // 비동기방식으로 실행
    // then chaining
    fetch(url)  // url에 데이터 패치 요청
      .then(resp => resp.json()) // 받은 응답 데이터를 json형태로 변환
      .then(data => setTdata(data.data))
      .catch(err => console.log(err))
  }

  // 랜더링되고 나서 한번만 실행
  useEffect(() => {
    let url = `https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?`;

    url = `${url}page=1&perPage=20&`;
    url = `${url}serviceKey=${process.env.REACT_APP_APIKEY}`;

    // console.log(url);

    getDataFetch(url);
  }, []);

  useEffect(() => {
    // console.log("tdata=", tdata);
    if (!tdata)
      return;

    let tmp = tdata.map(item => item['사고유형_대분류'])
    tmp = new Set(tmp)
    tmp = [...tmp] // 집합을 배열로 변환
    // console.log('tdata tm => ', tmp); 

    setC1(tmp);
  }, [tdata])

  useEffect(() => {
    // console.log("selC1=", selC1)
    if (!tdata)
      return;

    let tmp = tdata.filter(item => item.사고유형_대분류 === selC1)
      .map(item => item.사고유형_중분류);
    tmp = new Set(tmp);
    tmp = [...tmp];
    // console.log("tmp", tmp);

    setInfo(''); // 초기화
    setC2(tmp);
  }, [selC1])

  useEffect(() => {
    if (!tdata)
      return;

    let tmp = tdata.filter(item => item.사고유형_대분류 === selC1 && item.사고유형_중분류 === selC2);
    setDetail(tmp[0]);
  }, [selC2])

  useEffect(() => {
    if (!tdata)
      return;

    // console.log("detail => ", detail)
    const keyArray = ['사고건수', '사망자수', '중상자수', '경상자수', '부상신고자수']

    let tm = keyArray.map(k =>
      <div className='w-full flex justify-center items-center' key={k}>
        <div className="w-3/5 h-10 
                        flex justify-center items-center
                        text-white bg-sky-900">{k}</div>
        <div className="w-1/2 h-10
                        flex justify-center items-center
                        font-bold bg-slate-200">{parseInt(detail[k]).toLocaleString()} 명</div>
      </div>
    );

    setInfo(tm);
  }, [detail])

  return (
    <div className="w-full h-full
                    flex flex-col justify-start items-center">
      {c1 && <TrafficNav title='대분류' category={c1} sel={selC1} setSel={setSelC1} />}
      {c2 && <TrafficNav title='중분류' category={c2} sel={selC2} setSel={setSelC2} />}
      <TrafficDeatil info={info}/>
    </div>
  )
}