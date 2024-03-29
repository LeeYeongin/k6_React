import { useState, useEffect, useRef } from "react";
import GalleryCard from "./GalleryCard";

export default function Festival() {
    // 부산축제 전체 데이터
    const [tdata, setTdata] = useState();
    const [guname, setGuname] = useState();
    const [opTags, setOpTags] = useState();
    const [cardTags, setCardTags] = useState();

    // select 값
    const selRef = useRef();

    // select 선택
    const handleSelGu = () => {
        // console.log(selRef.current.value);

        let tmp = tdata.filter(item =>
            item.GUGUN_NM === selRef.current.value
        )

        // console.log(tmp);
        tmp = tmp.map(item =>{
            
            // title의 ex) (한, 중, 일)과 같은 글씨 지우기
            let title = item.MAIN_TITLE;
            if(title.includes('(')){
                let i = title.indexOf('(');
                title = title.substring(0, i);
            }

            return <GalleryCard key = {item.UC_SEQ}
                         imgUrl = {item.MAIN_IMG_NORMAL}
                        //  title = {item.MAIN_TITLE}
                         title = {title}
                         ptitle ={item.TRFC_INFO}
                         ktag = {item.USAGE_DAY_WEEK_AND_TIME}/>
            }
        )

        setCardTags(tmp);
    }

    // 실제 fetch
    const getData = (url) => {
        fetch(url)
            .then(res => res.json())
            .then(data => setTdata(data.getFestivalKr.item))
            .catch(err => console.log(err));
    }

    // 부산축제 데이터 fetch
    useEffect(() => {
        let url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?`;
        url = url + `serviceKey=${process.env.REACT_APP_APIKEY}`;
        url = url + `&pageNo=1&numOfRows=40&resultType=json`;

        // console.log(url);
        getData(url);
    }, []);

    // 구정보 만들기
    useEffect(() => {
        if (!tdata)
            return;

        // console.log(tdata)
        let gu = tdata.map(item => item.GUGUN_NM);
        gu = new Set(gu);
        gu = [...gu].sort();

        // console.log(gu)
        setGuname(gu);
    }, [tdata])

    useEffect(() => {
        if (!guname)
            return;
  
        let tm = guname.map(item => 
            <option value={item} key={`op${item}`}>
                {item}
            </option>
        )

        setOpTags(tm);
    }, [guname])

    return (
        <div className="w-full h-full flex flex-col
                        justify-start items-center">
            <h1 className="font-bold text-3xl text-sky-800 m-3">부산축제정보</h1>
            <form className="w-3/5 mx-auto flex justify-center items-center
                            mt-3">
                <label htmlFor="gu" className="w-1/3 block text-xl font-bold text-gray-900">부산축제 정보 선택</label>
                <select id="gu" 
                        onChange={handleSelGu}
                        ref={selRef}
                        className="w-2/3 bg-gray-50 border border-gray-300
                                            text-gray-900 text-sm rounded-lg 
                                            focus:ring-blue-500 focus:border-blue-500 
                                            block p-2.5">
                    <option defaultValue>--지역선택--</option>
                    {opTags}
                </select>
            </form>
            <div className="w-full grid grid-cols-1 
                            md:grid-cols-2 lg:grid-cols-3
                            gap-4 p-2">
                {cardTags}
            </div>
        </div>
    )
}
