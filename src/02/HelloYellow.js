import styles from "./HelloYellow.module.css"
export default function HelloYellow() {
    const st = {
        color:"yellow"
    }
    
    return (
        // 개발자 툴에서 확인해보면 class는 module이 알아서 정해줌을 볼 수 있음
        <h1 className={styles.ch1}>안녕하세요.</h1> 

        // inline 스타일을 적용하면 가장 우선순위로 적용
        // <h1 className="ch1" style={st}>안녕하세요.</h1>
    )
}