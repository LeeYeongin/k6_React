import React from 'react'
import TailButton from '../UI/TailButton'

export default function Lotto() {
    const handleLottoClick = () => {
        console.log('Lotto Click')
    }

    const handleLottoClick2 = () => {
        console.log('Lotto2 Click')
    }

    return (
        <div>
            {/* 같은 TailButton 컴포넌트를 호출하지만 전달받은 함수가 달라 다른 기능 수행 */}
            <TailButton caption='로또번호 생성'
                color='sky'
                handleClick={handleLottoClick} />
            <TailButton caption='로또번호 생성2'
                color='red'
                handleClick={handleLottoClick2} />
            <TailButton caption='로또번호 생성3'
                color='green'
                handleClick={handleLottoClick2} />
        </div>
    )
}
