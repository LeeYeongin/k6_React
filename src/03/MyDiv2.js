import MyDiv3 from "./MyDiv3";

export default function MyDiv2(probs) { // probs로 전달받은 object값을 받음
    console.log(probs) // 콘솔창 결과: {d1: 'div1', d2: 'div2', d3: 'div3'}
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
                {`${probs.d1} > ${probs.d2}`}
            </p>
            <MyDiv3 d1={probs.d1} d2={probs.d2} d3={probs.d3}/>
        </div>
    )
}
