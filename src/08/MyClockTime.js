import { useState, useEffect } from "react";

function MyClockTime(){
    const [currentTime, setCurrentTime] = useState();
    // const [tm, setTm] = useState(0);

    // []: 컴포넌트 생성시 최초 한번 실행
    useEffect(() => {
        const t = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        console.log("[] => ", currentTime);
        
        return () => {clearInterval(t)};
    }, []);

    // [currentTime]: currentTime변수가 바뀔때 마다 실행 (초기화도 바뀐것으로 인식)
    // useEffect(()=>{
    //     console.log("[currentTime] => ", currentTime);
    // },[currentTime])

    // // 랜더링이 일어날때 마다 실행
    // useEffect(()=>{
    //     console.log("[]없는 경우 => ", currentTime);
    // })

    return (
        <h1 className="m-7 font-bold text-2xl">
            {currentTime && `현재 시각: ${currentTime.toLocaleTimeString()}`}
        </h1>
    );
}

export default MyClockTime;