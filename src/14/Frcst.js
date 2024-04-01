import TailInput from "../UI/TailInput";
import TailSelect from "../UI/TailSelect";
import TailButton from "../UI/TailButton";
import xyData from "./getxy.json";
import { useState, useEffect, useRef } from "react";

export default function Frcst() {
    const dRef = useRef();
    const sRef = useRef();
    const ops = xyData.map(item => item["1단계"])
    const [x, setX] = useState();
    const [y, setY] = useState();

    useEffect(()=>{
        if(!x)
            return;
        if(!y)
            return;
        console.log(x + ", " + y);
        getData();
    }, [x,y]);


    const handleDate = () => {
        console.log(dRef.current.value);
        // console.log(dRef.current.value.replaceAll("-",""));
    }

    const handleArea = () => {
        // console.log(sRef.current.value);

        let tmp = xyData.filter(item => item['1단계'] === sRef.current.value);
        // console.log(tmp);

        setX(tmp[0]["격자 X"]);
        setY(tmp[0]["격자 Y"]);
    }

    const getData = () => {
        // 초단기
        let url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?`;
        url = url + `serviceKey=${process.env.REACT_APP_APIKEY}`;
        url = url + `&pageNo=1&numOfRows=1000&dataType=json&base_date=${dRef.current.value.replaceAll("-","")}&base_time=0630&nx=${x}&ny=${y}`;

        fetch(url)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }


    return (
        <div className="w-11/12 justify-start
                        grid grid-cols-1 
                        md:grid-cols-2
                        gap-4 p-2">
            <div>
                <TailInput type="date" inputRef={dRef}
                    ph="날짜선택" handleChange={handleDate} />
            </div>
            <div>
                <TailSelect opDefault="---- 지역 선택 ----"
                    selRef={sRef}
                    handleSel={handleArea}
                    ops={ops} />
            </div>
            <div>
                <TailButton caption="초단기 예보"
                    color="sky"
                    handleClick={() => { }} />
            </div>
            <div>
                <TailButton caption="단기 예보"
                    color="sky"
                    handleClick={() => { }} />
            </div>
        </div>
    )
}
