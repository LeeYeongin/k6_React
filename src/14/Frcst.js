import TailInput from "../UI/TailInput";
import TailSelect from "../UI/TailSelect";
import TailButton from "../UI/TailButton";
import xyData from "./getxy.json";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Frcst() {
    const navigator = useNavigate();
    const dRef = useRef();
    const sRef = useRef();
    const ops = xyData.map(item => item["1단계"]);

    const [x, setX] = useState();
    const [y, setY] = useState();
    const [area, setArea] = useState();
    const [dt, setDt] = useState();

    useEffect(() => {
        // console.log(x + ", " + y);
        // getData();
    }, [x, y]);


    const handleDate = () => {
        setDt(dRef.current.value.replaceAll("-", ""));
    }

    // 초단기 예보, 단기예보 같이 다룸
    const handleFrcst = (loc) => {
        if (dt === '' || dt === undefined) {
            alert("날짜를 선택하세요.");
            dRef.current.focus();
            return;
        }

        if (area === '' || area === undefined) {
            alert("지역을 선택하세요.");
            return;
        }

        // component를 따로 사용할 경우
        // navigator(`/${loc}/${dt}/${area}/${x}/${y}`);

        let gubun;
        if(loc === 'ultra')
            gubun = '초단기예보';
        else
            gubun = '단기예보';
        
        navigator(`/flist?dt=${dt}&area=${area}&x=${x}&y=${y}&gubun=${gubun}`)
    }

    // 초단기예보
    const handleUltra = () => {
        if (dt === '' || dt === undefined) {
            alert("날짜를 선택하세요.");
            dRef.current.focus();
            return;
        }

        if (area === '' || area === undefined) {
            alert("지역을 선택하세요.");
            return;
        }

        navigator(`/ultra/${dt}/${area}/${x}/${y}`);
    }

    // 단기예보
    const handleVilage = () => {
        if (dt === '' || dt === undefined) {
            alert("날짜를 선택하세요.");
            dRef.current.focus();
            return;
        }

        if (area === '' || area === undefined) {
            alert("지역을 선택하세요.");
            return;
        }

        navigator(`/vilage/${dt}/${area}/${x}/${y}`);
    }

    const handleArea = () => {
        // console.log(sRef.current.value);
        if (sRef.current.value === '' || sRef.current.value === undefined)
            return;

        let tmp = xyData.filter(item => item['1단계'] === sRef.current.value);
        // console.log(tmp);

        setArea(sRef.current.value);
        setX(tmp[0]["격자 X"]);
        setY(tmp[0]["격자 Y"]);
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
                    handleClick={()=>{handleFrcst("ultra")}} />
            </div>
            <div>
                <TailButton caption="단기 예보"
                    color="sky"
                    handleClick={()=>{handleFrcst("vilage")}} />
            </div>
        </div>
    )
}
