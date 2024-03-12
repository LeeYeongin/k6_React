import './Hello.css';

function Hello() {
    let n = Math.floor(Math.random()*100)+1;

    const st1 = {
        backgroundColor: "darkblue",
        color: "white"
    }

    // let s = '';
    // if (n % 2 === 0) s="짝수";
    // else s="홀수";

    let x;

    return(
        <h1>
            {/* 표현식은 중괄호 내에 위치 */}
            <span style={st1}>Hello</span> 
            <span style={{display: "inline-flex", margin:"10px"}}>
                {/* {n < 10 && "0"}{n} */}
                { n < 10 ? `0${n}`:n}
            </span> 
            {/* 조건부 렌더링 (if문 사용불가) */}
            {/* 삼항연산식: '조건 ? 참일 때 : 거짓일 때' */}
            { n % 2 === 0 ? "짝수 " : "홀수 "}    
            { n % 2 === 0 
                ? <span style={{color:"red"}}>짝수</span>
                : <span style={{color:"blue"}}>홀수</span>
            }
            {/* &&: 조건식이 참일경우 */}
            { n % 2 === 0 && "🍎"} 
            { n % 2 === 1 && "🍑"}

            {/* x가 undefined이고 x뿐일때, 오류 발생 -> || 으로 오류 대신 문자 출력 */}
            {/* <p>{x || "x는 undefined입니다."}</p> */}
        </h1> 
    );
}

export default Hello;