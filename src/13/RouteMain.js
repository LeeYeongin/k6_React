import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouteHome from "./RouteHome";
import RouteNav from "./RouteNav";
import RoutePage1 from "./RoutePage1";
import RoutePage2 from "./RoutePage2";

export default function RouteMain() {
    return ( 
        // 주소 정보(경로) 결정에 대한 코드
        <BrowserRouter>
        <div className="w-full h-full flex flex-col
                        justify-start items-center">
            {/* Routes태그 밖에 적은 컴포넌트는 계속 유지됨 */}
            <RouteNav /> 
            <Routes>
                <Route path="/" element={<RouteHome />} />
                {/* dom 제공 파라미터 전달. item은 변수명
                    page1/뒤에 반드시 전달하는 값을 같이 보내야함 */}
                <Route path="/page1/:item" element={<RoutePage1 />} />
                {/* 변수를 반드시 전달하지 않아도 됨 */}
                <Route path="/page2" element={<RoutePage2 />} />
            </Routes>
        </div>
        </BrowserRouter>
    )
}
