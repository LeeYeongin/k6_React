import MyDiv3 from "./MyDiv3";

export default function MyDiv2({d1, d2, d3}) { // 구조분해할당방식으로 전달 받음
    return (
        <div className='h-4/6 w-4/5
                    flex flex-col justify-center items-center
                    bg-cyan-700
                    text-cyan-50'>
            <p className='w-4/5
                    flex justify-start
                    font-bold text-2xl
                    my-2
                    '>
                {`${d1} > ${d2}`}
            </p>
            <MyDiv3 d1={d1} d2={d2} d3={d3}/>
        </div>
    )
}
