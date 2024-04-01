import React from 'react'
import TailButton from '../UI/TailButton'
import TailBall from './TailBall'
import { useState } from 'react';

export default function Lotto() {

    const [ballTags, setBallTags] = useState();

    const handleLottoClick = () => {
        let nums = []
        while(nums.length < 7){
            let n = Math.floor(Math.random()*45)+1;
            if(!nums.includes(n))
                nums.push(n);
        }

        // console.log (nums);
        nums.splice(6,0,'+'); // index 6인 자리에 +삽입
        console.log (nums);


        const tm = nums.map((item, idx) => 
            // 코드 1
            idx === 6 ? <span className='text-xl font-bold' key={`sp${item}`}>{item}</span>
                        :<TailBall n={item} key={`balls${item}`}/>
        
            // 코드 2
            // {    
            //     if(idx === 5) 
            //         return <>
            //                 <TailBall n={item} key={`balls${item}`}/>
            //                 <div className='font-bold text-2xl'>+</div>
            //                </>
            //     else 
            //         return <TailBall n={item} key={`balls${item}`}/>    
            // }
        );

        setBallTags(tm);
    }

    

    return (
        <div className='flex flex-col justify-center items-center w-9/10 h-full'>
            <div className='flex justify-center items-center mb-4'>
                {ballTags}
            </div>
            {/* 같은 TailButton 컴포넌트를 호출하지만 전달받은 함수가 달라 다른 기능 수행 */}
            <TailButton caption='로또번호 생성'
                color='sky'
                handleClick={handleLottoClick} />
        </div>
    )
}
