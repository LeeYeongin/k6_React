import MyDiv2 from "./MyDiv2";

export default function MyDiv1() {
    const dname1 = 'div1';
    const dname2 = 'div2';
    const dname3 = 'div3';

    return (
        <div className='h-4/5 w-4/5
                        flex flex-col justify-center items-center
                        bg-cyan-900
                        text-cyan-50'>
            <p className="w-4/5
                          flex justify-start
                          font-bold text-2xl
                          my-2">
                {dname1}
            </p>
            {/* 속성값에 넣어 하위 컴포넌트에 전달 
                d1: 변수이름(마음대로 지정가능*/}
            <MyDiv2 d1={dname1} d2={dname2} d3={dname3}/>
        </div>
    )
}
