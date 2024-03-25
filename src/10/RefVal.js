import { useState, useEffect, useRef } from 'react';
import TailButton from '../UI/TailButton';

export default function RefVal() {
    let cnt = 0;                                // 컴포넌트 변수
    const [stCnt, setStCnt] = useState(0);      // state 변수
    const refCnt = useRef(0);                   // ref 변수
    
    const handleLocal = () => {
        cnt = cnt + 1;
        console.log('cnt = ', cnt);
    }

    const handleState = () => {
        setStCnt(stCnt+1);
    }

    const handleRef = () => {
        refCnt.current = refCnt.current + 1;
        console.log('refCnt = ', refCnt.current);
    }

    useEffect(() => {
        console.log('stCnt = ', stCnt);
    }, [stCnt]);

    return (
        <div className="w-10/12 grid grid-cols-3 gap-4 
                        text-center">
            <div>
                {/* console에서는 변경됨을 확인할 수 있지만
                    화면에서는 값이 변하지 않음 */}
                컴포넌트 변수(지역변수): {cnt}
            </div>
            <div>
                {/* 화면에서도 값이 변경(반영)됨을 볼 수 있음 */}
                State 변수(지역변수): {stCnt}
            </div>
            <div>
                {/*
                    Ref 변수는 current를 통해 접근 
                    화면이 다시 랜더링 될때 값이 변경(반영)
                    폼태그의 값을 가져올 때 많이 사용
                */}
                Ref 변수(지역변수): {refCnt.current}
            </div>
            <div>
                <TailButton caption="컴포넌트 변수"
                    color="blue"
                    handleClick={handleLocal} />
            </div>
            <div>
                <TailButton caption="State 변수"
                    color="blue"
                    handleClick={handleState} />
            </div>
            <div>
                <TailButton caption="Ref 변수"
                    color="blue"
                    handleClick={handleRef} />
            </div>
        </div>
    )
}
