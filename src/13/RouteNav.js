import TailButton from "../UI/TailButton"
import { Link, useNavigate } from "react-router-dom"

export default function RouteNav() {
    const navigator = useNavigate();
    const apple = '🍎';
    const orange = '🍊';
    return (
        <div className="w-11/12 flex flex-col
                        justify-center items-center">
            {/* 링크 방식 */}
            <ul className="w-11/12 flex
                        justify-between items-center">
                <li className="px-4 py-2 m-2 rounded-md w-1/3
                                bg-slate-200 text-center">
                    <Link to='/'>홈</Link>
                </li>
                <li className="px-4 py-2 m-2 rounded-md w-1/3
                                bg-slate-200 text-center">
                    <Link to='/page1/🥙'>page1</Link>
                </li>
                <li className="px-4 py-2 m-2 rounded-md w-1/3
                                bg-slate-200 text-center">
                    <Link to='/page2?item1=😀&item2=😲'>page2</Link>
                </li>
            </ul>

            {/* 라우팅 방식: 이벤트로 받아 처리 */}
            <div className="w-11/12 flex
                        justify-center items-center">
                <TailButton caption="홈"
                    color="blue"
                    handleClick={() => {navigator("/")}} />
                <TailButton caption="page1"
                    color="blue"
                    handleClick={() => {navigator("/page1/🥨")}} />
                {/* url 주소에 데이터(query string사용)를 담아 같이 전송 */}
                <TailButton caption="오렌지"
                    color="blue"
                    handleClick={() => {navigator(`/page2?item1=${orange}`)}} />
                <TailButton caption="사과 바나나"
                    color="blue"
                    handleClick={() => {navigator(`/page2?item1=${apple}&item2=🍌`)}} />
            </div>
        </div>
    )
}
