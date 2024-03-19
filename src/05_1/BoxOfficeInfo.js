import React from 'react'

export default function BoxOfficeInfo({ info }) {
    return (
        <div className='w-4/5
                        flex justify-center items-center
                        text-bold text-center 
                        bg-slate-800 text-white'>
            {info === undefined ? '영화를 선택하세요.'
                : `[${info.movieCd}] ${info.movieNm} -
                    개봉일자 ${info.openDt} -
                    총 누적 관객 수는 ${parseInt(info.audiAcc).toLocaleString()}명 입니다.`}
        </div>
    )
}
